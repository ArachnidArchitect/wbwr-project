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
    <section className="w-full py-12 mx-auto flex flex-col">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-black">Our best gear</h2>
        <p className="text-sm text-gray-600">Unlock your potential with the best UA Gear</p>
      </div>

      {/* Gallery Grid */}
<div
  className="
    grid
    grid-flow-col
    auto-cols-[minmax(150px,420px)]
    gap-6
    overflow-x-auto
    snap-x snap-mandatory
    scrollbar-hide
    mx-auto
  "
>
  {gearCategories.map((category, index) => (
    <div
      key={index}
      className="snap-start flex flex-col items-start w-full"
    >
      <div
        className="
          w-full
          aspect-[1/1]
          bg-contain bg-no-repeat bg-center
        "
        style={{ backgroundImage: `url(${category.image})` }}
      />
            <button className="mt-2 text-sm text-black hover:underline second-button">Shop Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestGearGallery;
