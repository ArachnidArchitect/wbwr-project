import React from "react";

// Define the type for each gear card
type GearCategory = {
  title: string;
  image: string;
  alt: string;
};

// Gear data list (Replace image paths with real assets)
const gearCategories: GearCategory[] = [
  {
    title: "TRAIN",
    image: "/assets/Shared%20Mobile%20&%20Desktop%20Assets/Train.jpg",
    alt: "Train",
  },
  {
    title: "RUN",
    image: "/assets/Shared%20Mobile%20&%20Desktop%20Assets/Run.jpg",
    alt: "Run gear",
  },
  {
    title: "GOLF",
    image: "/assets/Shared%20Mobile%20&%20Desktop%20Assets/Golf.jpg",
    alt: "Golf gear",
  },

  {
    title: "ACCESSORIES",
    image: "/assets/Shared%20Mobile%20&%20Desktop%20Assets/Accessories.jpg",
    alt: "Accessories",
  }
];

const BestGearGallery: React.FC = () => {
  return (
    <section className="w-full px-6 py-12 mx-auto">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-black">Our best gear</h2>
        <p className="text-sm text-gray-600">Unlock your potential with the best UA Gear</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
        {gearCategories.map((category, index) => (
          <div key={index} className="flex flex-col items-start">
            <div
              className="w-60 h-60 bg-contain bg-center"
              style={{ backgroundImage: `url(${category.image})` }}
            >
            </div>
            <button className="mt-2 text-sm text-black hover:underline">Shop Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestGearGallery;
