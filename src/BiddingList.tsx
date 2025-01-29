import React from "react";
import { motion } from "framer-motion";
import "./BiddingList.css";

interface BiddingItem {
  id: number;
  image: string;
  title: string;
  timeLeft: string;
  likes: number;
    bidders: { avatar: string }[];
    price?: number;
}

const items: BiddingItem[] = [
  {
    id: 1,
    image: "/Assets/bidding-image 2.jpeg",
    title: "Vulputate felis purus viverra morbi facilisi eget",
    timeLeft: "2:41 min left",
    likes: 120,
    bidders: [
      { avatar: "/images/user1.jpg" },
      { avatar: "/images/user2.jpg" },
      { avatar: "/images/user3.jpg" },
        ],
    price: 2.55,
  },
  {
    id: 2,
    image: "/Assets/Item (1).png",
    title: "Dui accumsan leo vestibulum ornare eu",
    timeLeft: "22:59 min left",
    likes: 570,
    bidders: [
      { avatar: "/images/user4.jpg" },
      { avatar: "/images/user5.jpg" },
      { avatar: "/images/user6.jpg" },
      ],
    price: 3.19,
  },
  {
    id: 3,
    image: "/Assets/Item (2).png",
    title: "Vulputate felis purus viverra morbi facilisi eget",
    timeLeft: "37:01 min left",
    likes: 98,
    bidders: [
      { avatar: "/images/user7.jpg" },
      { avatar: "/images/user8.jpg" },
      { avatar: "/images/user9.jpg" },
      ],
    price: 1.11,
  },
  {
    id: 4,
    image: "/Assets/Item (3).png",
    title: "Mattis at diam lorem nam sed sociis",
    timeLeft: "12:15 min left",
    likes: 19,
    bidders: [
      { avatar: "/images/user10.jpg" },
      { avatar: "/images/user11.jpg" },
      { avatar: "/images/user12.jpg" },
      ],
    price: 1.63,
    },
    {
        id: 5,
        image: "/Assets/bidding-image.png",
        title: "Mattis at diam lorem nam sed sociis",
        timeLeft: "12:15 min left",
        likes: 19,
        bidders: [
            { avatar: "/images/user10.jpg" },
            { avatar: "/images/user11.jpg" },
            { avatar: "/images/user12.jpg" },
        ],
        price: 1.63,
    },
];

const BiddingList: React.FC = () => {
    return (
        <section className="live-auctions">
        <h2 className="section-title">Latest Live Auctions</h2>
      <div className="bidding-list">
        
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="bidding-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={item.image} alt={item.title} className="bidding-image" />
              <div className="bidding-details">
                  <div className="bidding-header">
                      <p>{item.title}</p>
                        <span>{item.price} ETH</span>
                  </div>
                  <span className="timer">⏱ {item.timeLeft}</span>

            {/* Bidders Section */}
            
                  <div className="bidders">
                      <div className="avatar-container">
              {item.bidders.map((bidder, index) => (
                <img
                  key={index}
                  src={bidder.avatar}
                  alt={`Bidder ${index + 1}`}
                  className="bidder-avatar"
                />
              ))}
                          </div>
                      <span className="bidders-count">{item.bidders.length} people are bidding</span>
                      <span className="bidders-likes">❤️ {item.likes}</span>
            </div>

            <div className="bidding-footer">
              
              
            </div>
          </div>
        </motion.div>
      ))}
            </div>
        </section>
  );
};

export default BiddingList;
