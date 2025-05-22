import React, { useEffect, useRef, useState } from "react";

const InstagramGrid: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Autoplay video when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) videoRef.current.play().catch(() => {});
      else videoRef.current.pause();
    }
  }, [isVisible]);

  const media = [
    { type: "video", src: "/assets/Shared%20Mobile%20&%20Desktop%20Assets/ig_video.mp4" },
    { type: "image", src: "./assets/Desktop%20Assets/IG%20Image%202_DT.jpg" },
    { type: "image", src: "./assets/Desktop%20Assets/IG%20Image%203_DT.jpg" },
    { type: "image", src: "./assets/Desktop%20Assets/IG%20Image%204_DT.jpg" },
    { type: "image", src: "./assets/Desktop%20Assets/IG%20Image%205_DT.jpg" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold">What's happening on Instagram</h2>
      <p className="text-sm text-gray-600 mb-6">
        Don’t miss out on the latest news and updates from Under Armour.
      </p>

      {/* Desktop and tablet layout */}
      <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-4">
        {media.map((item, i) => (
          <a
            key={i}
            href="https://www.instagram.com/underarmour"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative ${i === 0 ? "row-span-2 col-span-1" : ""}`}
          >
            {item.type === "video" ? (
              <video
                ref={videoRef}
                src={item.src}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={item.src}
                alt={`Instagram ${i + 1}`}
                className="w-full h-full object-cover"
              />
            )}
          </a>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="grid md:hidden grid-cols-2 gap-4">
        {media.map((item, i) => (
          <a
            key={i}
            href="https://www.instagram.com/underarmour"
            target="_blank"
            rel="noopener noreferrer"
            className={`${i === 0 ? "col-span-2" : ""}`}
          >
            {item.type === "video" ? (
              <video
                ref={videoRef}
                src={item.src}
                muted
                loop
                playsInline
                className="w-full object-cover aspect-[1/1]"
              />
            ) : (
              <img
                src={item.src}
                alt={`Instagram ${i + 1}`}
                className="w-full object-cover aspect-[1/1]"
              />
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramGrid;
