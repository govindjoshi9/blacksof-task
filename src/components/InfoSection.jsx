import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { vehicleCategories } from "./vehicle/vehicleData";
import { ChevronDown } from "./vehicle/HelperComp";

const InfoSection = () => {
  // State management
  const [activeVehicleType, setActiveVehicleType] = useState("passenger");
  const [activeView, setActiveView] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [preloadedImages, setPreloadedImages] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs
  const sectionRef = useRef(null);
  const vehicleRef = useRef(null);
  const contentRef = useRef(null);
  const statsRefs = useRef([]);
  const imageRefs = useRef([]);
  const animationRef = useRef(null);

  // Preload images for smooth transitions
  useEffect(() => {
    const preloadImages = async () => {
      setIsLoading(true);
      const imagesToPreload = [];

      Object.values(vehicleCategories).forEach((category) => {
        category.views.forEach((view) => {
          imagesToPreload.push(
            new Promise((resolve) => {
              const img = new Image();
              img.src = view.image;
              img.onload = () => resolve({ [view.id]: true });
              img.onerror = () => resolve({ [view.id]: false });
            })
          );
        });
      });

      const results = await Promise.all(imagesToPreload);
      const preloadStatus = results.reduce(
        (acc, curr) => ({ ...acc, ...curr }),
        {}
      );

      setPreloadedImages(preloadStatus);
      setIsLoading(false);
    };

    preloadImages();
  }, []);

  // Animation setup with cleanup
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Section entrance animation
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Vehicle scroll animation
      animationRef.current = gsap.to(vehicleRef.current, {
        x: "25%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onUpdate: (self) => {
            // Parallax effect based on scroll progress
            const progress = self.progress;
            gsap.to(imageRefs.current[activeView], {
              scale: 1 - progress * 0.1,
              duration: 0.5,
            });
          },
        },
      });

      // Stats animation
      statsRefs.current.forEach((stat, index) => {
        gsap.from(stat, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [activeView]);

  // View navigation with animation lock
  const changeView = useCallback(
    (direction) => {
      if (isAnimating) return;

      setIsAnimating(true);
      const currentCategory = vehicleCategories[activeVehicleType];
      const viewsCount = currentCategory.views.length;

      // Animate out current view
      gsap.to(imageRefs.current[activeView], {
        opacity: 0,
        x: direction === "next" ? -50 : 50,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setActiveView((prev) => {
            const newIndex =
              direction === "next"
                ? (prev + 1) % viewsCount
                : (prev - 1 + viewsCount) % viewsCount;

            // Animate in new view
            gsap.fromTo(
              imageRefs.current[newIndex],
              { opacity: 0, x: direction === "next" ? 50 : -50 },
              {
                opacity: 1,
                x: 0,
                duration: 0.7,
                ease: "power2.out",
                onComplete: () => setIsAnimating(false),
              }
            );

            return newIndex;
          });
        },
      });
    },
    [activeVehicleType, activeView, isAnimating]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") changeView("next");
      if (e.key === "ArrowLeft") changeView("prev");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changeView]);

  const currentCategory = vehicleCategories[activeVehicleType];
  const currentView = currentCategory.views[activeView];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-900 text-white w-full min-h-screen py-20 overflow-hidden"
      aria-labelledby="vehicle-showcase-heading"
    >
      {/* Performance optimized background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"
          style={{ willChange: "opacity" }}
        />
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center">
          <Loader2 className="animate-spin h-12 w-12 text-blue-500" />
          <span className="sr-only">Loading vehicle showcase...</span>
        </div>
      )}

      <div className="container mx-auto px-4 h-full">
        {/* Section header with semantic HTML */}
        <header className="text-center mb-16">
          <h1
            id="vehicle-showcase-heading"
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Evolving the drive with 360-degree
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">
            nonwoven solutions
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 h-full">
          {/* Left content - scrollable */}
          <div
            ref={contentRef}
            className="lg:w-2/5 flex flex-col justify-between"
          >
            <div>
              {/* Vehicle type selector with accessibility */}
              <nav aria-label="Vehicle type selection">
                <div className="flex gap-8 mb-12">
                  {Object.entries(vehicleCategories).map(([key, category]) => (
                    <button
                      key={key}
                      onClick={() => {
                        if (activeVehicleType !== key) {
                          setActiveVehicleType(key);
                          setActiveView(0);
                        }
                      }}
                      aria-current={
                        activeVehicleType === key ? "page" : undefined
                      }
                      className={`text-xl font-medium pb-2 relative transition-colors ${
                        activeVehicleType === key
                          ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500"
                          : "text-gray-400 hover:text-gray-300"
                      }`}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>
              </nav>

              {/* Current view content */}
              <article aria-live="polite">
                <h2 className="text-2xl font-semibold mb-4">
                  {currentView.title}
                </h2>
                <p className="text-gray-300 mb-6">{currentView.description}</p>

                {/* Stats with animation targets */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentView.stats.map((stat, index) => (
                    <div
                      key={index}
                      ref={(el) => (statsRefs.current[index] = el)}
                      className="bg-gray-800 p-4 rounded-lg backdrop-blur-sm border border-gray-700 transition-all hover:border-blue-500"
                    >
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold text-blue-400">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {/* View selector */}
            <div className="flex gap-4 flex-wrap">
              {currentCategory.views.map((view, index) => (
                <button
                  key={view.id}
                  onClick={() => {
                    if (index !== activeView) {
                      changeView(index > activeView ? "next" : "prev");
                    }
                  }}
                  aria-label={`Show ${view.title} view`}
                  className={`px-4 py-2 rounded-full transition-all ${
                    index === activeView
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {view.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right side - vehicle animation */}
          <div className="lg:w-3/5 relative h-[60vh] lg:h-[70vh]">
            <div className="absolute inset-0 flex items-center justify-center overflow-visible">
              <div ref={vehicleRef} className="relative h-full w-full">
                {currentCategory.views.map((view, index) => (
                  <div
                    key={view.id}
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      index === activeView
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <LazyLoadImage
                      src={view.image}
                      alt={`${view.title} view of ${currentCategory.title}`}
                      placeholderSrc={view.placeholder}
                      effect="blur"
                      width="100%"
                      height="100%"
                      className="w-full h-full object-contain object-right"
                      style={{
                        maxWidth: "150%",
                        willChange: "transform, opacity",
                        filter: index === activeView ? "none" : "blur(5px)",
                      }}
                      ref={(el) => (imageRefs.current[index] = el)}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows with touch support */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8">
              <button
                onClick={() => changeView("prev")}
                aria-label="Previous view"
                disabled={isAnimating}
                className="bg-gray-800 hover:bg-gray-700 rounded-full p-3 transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => changeView("next")}
                aria-label="Next view"
                disabled={isAnimating}
                className="bg-gray-800 hover:bg-gray-700 rounded-full p-3 transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* View indicator for mobile */}
            <div className="lg:hidden flex justify-center mt-8 gap-2">
              {currentCategory.views.map((_, index) => (
                <span
                  key={index}
                  className={`inline-block w-2 h-2 rounded-full transition-all ${
                    index === activeView ? "bg-blue-500 w-6" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div> 
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-70 animate-bounce">
        <ChevronDown size={24} className="text-gray-400" />
      </div>
    </section>
  );
};

export default InfoSection;
