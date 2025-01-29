import React from "react";
import "./PopularAuctions.css";

const auctions = [
  { id: 1, image: "/Assets/Item (9).png", title: "Faucibus habitasse at et platea massa mauris" },
  { id: 2, image: "/Assets/Item (10).png", title: "Diam purus sagittis nisl erat mauris" },
  { id: 3, image: "/Assets/Item (11).png", title: "Nascetur mauris viverra vel id id sem leo" },
  { id: 4, image: "/Assets/Image (4).png", title: "Susce id non dui amet amet maecenas" },
  { id: 5, image: "/Assets/Item (12).png", title: "Tellus duis neque fringilla pulvinar gravida" },
  { id: 6, image: "/Assets/Item (13).png", title: "Odio lacus neque ultrices purus eget" },
];

const PopularAuctions: React.FC = () => {
  return (
    <div className="auctions-container">
      <p className="overline">OVERLINE</p>
      <h2 className="title">Most popular live auctions</h2>
      
      <div className="category-buttons">
        {['Architecture', 'Photography', 'Games', 'Music'].map((category) => (
          <button key={category} className="category-button">{category}</button>
        ))}
      </div>

      <div className="auction-list">
        {auctions.map((auction) => (
          <div key={auction.id} className="auction-card">
            <img src={auction.image} alt={auction.title} className="auction-image" />
            <p id="auction-title">{auction.title}</p>
            <div className="auction-info">
                    <span className="timer-auction">⏱ 22:59</span>
                    <button>2.55 ETH</button>
                    </div>
                <div className="auction-info2">
                    <span className="bidders">101 people are bidding</span>
                    <span className="likes">❤️</span>
            </div>
          </div>
        ))}
      </div>
      
          <button className="show-more">Show me more</button>
          <hr />
    </div>
  );
};

export default PopularAuctions;
