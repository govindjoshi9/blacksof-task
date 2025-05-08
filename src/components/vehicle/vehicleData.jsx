export const vehicleCategories = {
  passenger: {
    title: "Passenger vehicles",
    description: "Advanced solutions for maximizing comfort and safety",
    views: [
      {
        id: "complete-body",
        title: "Complete Body",
        image: "/Passenger Alpha 1.png",
        placeholder: "/Passenger Alpha 1-placeholder.jpg",
        description: "Aerodynamic body with premium finishes",
        stats: [
          { label: "Material Durability", value: "300%" },
          { label: "Noise Reduction", value: "40dB" },
        ],
      },
      {
        id: "cabin",
        title: "Cabin",
        image: "/Cabin.png",
        placeholder: "/Cabin-placeholder.jpg",
        description: "Ergonomic interior with premium materials",
        stats: [
          { label: "Comfort Level", value: "A+" },
          { label: "Temperature Control", value: "±0.5°C" },
        ],
      },
      {
        id: "exterior",
        title: "Exterior",
        image: "/Exterior.png",
        placeholder: "/Exterior-placeholder.jpg",
        description:
          "Advanced structural components for enhanced safety and protection",
        stats: [
          { label: "Impact Absorption", value: "95%" },
          { label: "Fire Resistance", value: "1200°C" },
        ],
      },
      {
        id: "front",
        title: "Front",
        image: "/Front.png",
        placeholder: "/Front-placeholder.jpg",
        description: "Optimized front design for improved fuel economy",
        stats: [
          { label: "Fuel Savings", value: "15%" },
          { label: "CO2 Reduction", value: "20%" },
        ],
      },
      {
        id: "trunk",
        title: "Trunk",
        image: "/Trunk.png",
        placeholder: "/Trunk-placeholder.jpg",
        description:
          "Integrated smart trunk systems for better storage and connectivity",
        stats: [
          { label: "Connectivity", value: "5G" },
          { label: "Autonomous Level", value: "L2" },
        ],
      },
    ],
  },
  commercial: {
    title: "Commercial vehicles",
    description: "Heavy-duty solutions built for performance and reliability",
    views: [
      {
        id: "durability",
        title: "Durability",
        image: "/Commercial 3.png",
        placeholder: "/Commercial 3-placeholder.jpg",
        description: "Advancing nonwoven engineering for heavy-duty vehicles",
        stats: [
          { label: "Load Capacity", value: "25T" },
          { label: "Service Life", value: "1M km" },
        ],
      },
    ],
  },
};
