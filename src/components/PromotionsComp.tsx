import React from "react";

// Define the type for each gear card
type PromotionsArray = {
  title: string;
  image: string;
  alt: string;
};

// Gear data list (Replace image paths with real assets)
const PromotionsCat: PromotionsArray[] = [
  {
    title: "BUY 2 FOR R700",
    image: "/assets/Shared%20Mobile%20&%20Desktop%20Assets/Promo%201.jpg",
    alt: "Buy 2 For R700",
  },
  {
    title: "BUY 2 FOR R800",
    image: "/assets/Shared%20Mobile%20&%20Desktop%20Assets/Promo%202.jpg",
    alt: "Buy 2 For R800",
  },
  {
    title: "BUY 2 FOR R1000",
    image: "/assets/Shared%20Mobile%20&%20Desktop%20Assets/Promo%203.jpg",
    alt: "Buy 2 For R1000",
  },

  {
    title: "BUY 2 FOR R1200",
    image: "/assets/Shared%20Mobile%20&%20Desktop%20Assets/Promo%204.jpg",
    alt: "Buy 2 For R1200",
  }
];

const OurPromotions: React.FC = () => {
  return (
    <section className="w-full py-12 mx-auto">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-black">Discover our latest promotions</h2>
        <p className="text-sm text-gray-600">Get the best deals on the best gear</p>
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
  {PromotionsCat.map((category, index) => (
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
            </div>
        ))}
      </div>

    </section>
  );
};

export default OurPromotions;
