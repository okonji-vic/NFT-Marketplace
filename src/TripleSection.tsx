import React, { useState } from "react";
import { motion } from "framer-motion";
import "./TripleSection.css";

const carouselSection = [
    {
        id: 1,
        image: "/Assets/Item (4).png",
        title: "Fames habitasse risus ultricies tortor sit",
        time: "22:59",
        price: 2.55,
        bidders: 101,
        likes: "/Assets/Heart Icon (1).png",
    },
    {
        id: 2,
        image: "/Assets/Image (2).png",
        title: "Fames habitasse risus ultricies tortor sit",
        time: "22:59",
        price: 2.55,
        bidders: 101,
        likes: "/Assets/Heart Icon (1).png",
    },
    {
        id: 3,
        image: "/image3.png",
        title: "Fames habitasse risus ultricies tortor sit",
        time: "22:59",
        price: 2.55,
        bidders: 101,
        likes: "/Assets/Heart Icon (1).png",
    },
];

const nftItems = [
    {
        id: 1,
        image: "/Assets/Item (5).png",
        title: "Vulputate velit viverra volutpat volutpat tristique",
        time: "22:59",
        price: 1.25,
        bidders: 101,
        likes: "❤️"
    },
    {
        id: 2,
        image: "/Assets/Item (6).png",
        title: "Egestas blandit sit egestas non sed. Purus semper",
        time: "22:59",
        price: 1.25,
        bidders: 101,
        likes:"/Assets/Heart Icon (1).png"
    },
    {
        id: 3,
        image: "/Assets/Item (7).png",
        title: "Id ut consequat netus nec vel amet ut porta in augue",
        time: "22:59",
        price: 1.25,
        bidders: 101,
        likes:"/Assets/Heart Icon (1).png"
    },
    {
        id: 4,
        image: "/Assets/Item (8).png",
        title: "Sed et nibh felis integer tellus turpin",
        time: "22:59",
        price: 1.25,
        bidders: 101,
        likes: "❤️"
    },
];

// const images = [
//   "/Assets/Item (4).png",
//   "/Assets/Image (2).png",
//   "/image3.png",
// ];

const TripleSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselSection.length);
  };

  return (
    <section className="triple-section">
      {/* Left Section (Carousel) */}
      <div className="carousel-section">
        <h2>Check out the hottest Sale offers</h2>
        <div className="carousel">
          <motion.img
            key={currentIndex}
            src={carouselSection[currentIndex].image}
            alt="NFT Image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
                  />
                  <div className="carousel-info">
                  <p className="carousel-title">{carouselSection[currentIndex].title}</p>
                      <div className="carousel-header">
                      <span>⏱ {carouselSection[currentIndex].time}</span>
                        <button>{carouselSection[currentIndex].price} ETH</button>
                      </div>
                        
                      <div className="carousel-header2">  
                          <p>{carouselSection[currentIndex].bidders} people are bidding</p>
                          {/* <button className="heart-button">{carouselSection[currentIndex].likes}</button> */}
                          <button className="heart-button"><img src={carouselSection[currentIndex].likes} alt="Likes" /></button>
                      </div>
                    </div>
          <button className="carousel-button" onClick={nextImage}>
            ➜
          </button>
        </div>
        <button className="show-more">Show me more</button>
      </div>

      {/* Middle Section */}
      <div className="middle-section">
        <img src="/Assets/Image (3).png" alt="3D Art" className="main-image" />
        <h2>Get started creating & selling your NFTs</h2>
        <p>Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat.</p>
        <button className="primary-button">Get started</button>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>Top NFT at a lower price</h2>
        <ul>
          {/* {[1, 2, 3, 4].map((item) => (
            <li key={item} className="nft-item">
              <img src={`/nft${item}.png`} alt="NFT Item" className="nft-image" />
              <div className="nft-info">
                <p className="nft-title">NFT Title Here</p>
                <span>22:59</span>
                <span>1.25 ETH</span>
                <p>101 people are bidding</p>
              </div>
            </li>
          ))} */}
            {nftItems.map((item) => (
                <li key={item.id} className="nft-item">
                <img src={item.image} alt="NFT Item" className="nft-image" />
                <div className="nft-info">
                        <p className="nft-title">{item.title}</p>
                        <div className="nft-header">
                            <span>⏱ {item.time}</span>
                            <span>{item.price} ETH</span>
                        </div>
                        <div className="nft-header2">
                            <p>{item.bidders} people are bidding</p>
                            <button className="heart-button">{item.likes === "❤️" ? "❤️" : <img src={item.likes} alt="Likes" />}</button>
                        </div>
                </div>
                </li>
            ))}
        </ul>
        <button className="show-more">Show me more</button>
      </div>
    </section>
  );
};

export default TripleSection;
