import React, { useRef, useEffect } from "react";
import "./ScrollGallery.css";

const images = [
  "/Assets/Image (5).png",
  "/Assets/Image (6).png",
    "/Assets/Image (7).png",
    "/Assets/Image (8).png",
    "/Assets/Image (9).png",
    "/Assets/Image (10).png",
    "/Assets/Image (11).png",
    "/Assets/Image (12).png",
    "/Assets/Image (13).png",
    "/Assets/Image (14).png",
    "/Assets/Image (15).png",
    "/Assets/Image (16).png",
    "/Assets/Image (17).png",
    "/Assets/Image (18).png",
    "/Assets/Image (19).png",
    "/Assets/Image (20).png",
    "/Assets/Image (21).png",
    "/Assets/Image (22).jpeg",
];

const ScrollGallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += 2; // Speed of scroll
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const scrollInterval = setInterval(autoScroll, 50);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-wrapper" ref={scrollRef}>
        <div className="scroll-content">
          {images.map((image, index) => (
            <div key={index} className="scroll-item">
              <img src={image} alt={`NFT ${index + 1}`} />
              <p className="eth-price">{(Math.random() * 3 + 1).toFixed(2)} ETH</p>
            </div>
          ))}
          {/* Duplicate for seamless scrolling */}
          {images.map((image, index) => (
            <div key={`dup-${index}`} className="scroll-item">
              <img src={image} alt={`NFT ${index + 1}`} />
              <p className="eth-price">{(Math.random() * 3 + 1).toFixed(2)} ETH</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollGallery;
