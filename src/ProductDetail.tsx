
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./ProductDetail.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface BidHistory {
  timestamp: string;
  price: number;
}

interface BiddingItem {
  id: number;
  image: string;
  user_card_image?: string;
  title: string;
  likes: number;
  bidders: { avatar: string }[];
  price: number;
  username?: string;
  collection?: string;
  timeLeft2: string;
  bidHistory: BidHistory[];
}

const items: BiddingItem[] = [
  {
    id: 1,
    image: "/Assets/bidding-image 2.jpeg",
    user_card_image: "/Assets/Ellipse.png",
    title: "Vulputate felis purus viverra morbi facilisi eget",
    likes: 120,
    bidders: [
      { avatar: "/images/user1.jpg" },
      { avatar: "/images/user2.jpg" },
      { avatar: "/images/user3.jpg" },
    ],
    price: 2.55,
    username: "@brook_sim",
    collection: "afterlife",
    timeLeft2: "2025-02-01T12:00:00",
    bidHistory: [
      { timestamp: "2025-01-30T12:00:00", price: 2.1 },
      { timestamp: "2025-01-31T12:00:00", price: 2.3 },
      { timestamp: "2025-02-01T10:00:00", price: 2.55 },
    ],
  },
  {
    id: 2,
    image: "/Assets/Item (1).png",
    user_card_image: "/Assets/Ellipse (1).png",
    title: "Dui accumsan leo vestibulum ornare eu",
    likes: 570,
    bidders: [
      { avatar: "/images/user4.jpg" },
      { avatar: "/images/user5.jpg" },
      { avatar: "/images/user6.jpg" },
    ],
    price: 3.19,
    username: "@marvinmckin",
    collection: "afterlife",
    timeLeft2: "2025-02-01T15:00:00",
    bidHistory: [
      { timestamp: "2025-01-30T14:00:00", price: 2.8 },
      { timestamp: "2025-01-31T14:00:00", price: 3.0 },
      { timestamp: "2025-02-01T12:00:00", price: 3.19 },
    ],
    },
    {
        id: 3,
        image: "/Assets/Item (2).png",
        user_card_image: "/Assets/Ellipse (2).png",
        title: "Vulputate felis purus viverra morbi facilisi eget",
        likes: 98,
        bidders: [
            { avatar: "/images/user7.jpg" },
            { avatar: "/images/user8.jpg" },
            { avatar: "/images/user9.jpg" },
        ],
        price: 1.11,
        username: "@esther_howard",
        collection: "afterlife",
        timeLeft2: "2025-02-01T18:00:00",
        bidHistory: [
            { timestamp: "2025-01-30T17:00:00", price: 1.0 },
            { timestamp: "2025-01-31T17:00:00", price: 1.1 },
            { timestamp: "2025-02-01T16:00:00", price: 1.11 },
        ],
    },
    {
        id: 4,
        image: "/Assets/Item (3).png",
        user_card_image: "/Assets/Ellipse (3).png",
        title: "Mattis at diam lorem nam sed sociis",
        likes: 19,
        bidders: [
            { avatar: "/images/user10.jpg" },
            { avatar: "/images/user11.jpg" },
        ],
        price: 4.19,
        username: "@brook_sim",
        collection: "afterlife",
        timeLeft2: "2025-02-01T20:00:00",
        bidHistory: [
            { timestamp: "2025-01-30T19:00:00", price: 4.0 },
            { timestamp: "2025-01-31T19:00:00", price: 4.1 },
            { timestamp: "2025-02-01T18:00:00", price: 4.19 },
        ],
    },
    {
        id: 5,
        image: "/Assets/Bidding-Image.png",
        user_card_image: "/Assets/Ellipse (4).png",
        title: "Mattis at diam lorem nam sed sociis",
        likes: 19,
        bidders: [
            { avatar: "/images/user10.jpg" },
            { avatar: "/images/user11.jpg" },
        ],
        price: 4.19,
        username: "@brook_sim",
        collection: "afterlife",
        timeLeft2: "2025-02-01T20:00:00",
        bidHistory: [
            { timestamp: "2025-01-30T19:00:00", price: 4.0 },
            { timestamp: "2025-01-31T19:00:00", price: 4.1 },
            { timestamp: "2025-02-01T18:00:00", price: 4.19 },
        ],
    },
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = items.find((item) => item.id === Number(id));
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  useEffect(() => {
    if (product) {
      const targetTime = new Date(product.timeLeft2).getTime();
      const interval = setInterval(() => {
        const currentTime = Date.now();
        const remainingTime = targetTime - currentTime;

        if (remainingTime <= 0) {
          clearInterval(interval);
          setTimeRemaining("Auction Ended");
        } else {
          const hours = Math.floor(remainingTime / (1000 * 60 * 60));
          const minutes = Math.floor(
            (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
          setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [product]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const chartData = {
    labels: product.bidHistory.map((bid) =>
      new Date(bid.timestamp).toLocaleDateString()
    ),
    datasets: [
      {
        label: `Current Bid price ${product.price} ETH`,
        data: product.bidHistory.map((bid) => bid.price),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-image" />
      <div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div>
            <div>
              <img src={product.user_card_image} alt="Likes" className="likes-icon" />
              <p>
                <strong>Creator</strong><br /> {product.username}
              </p>
            </div>
            <div>
                          <img src="/Assets/Avatar.png" alt="Likes" className="likes-icon" />
              <p>
                <strong>Collection</strong><br />{product.collection}
              </p>
            </div>
          </div>
        </div>
        <div className="product-info2">
          <div>
          <p>
            <span>Current Price<br /></span>{product.price} <strong> ETH</strong>
          </p>
          <p>
            <span>Time Left</span><br />
            {timeRemaining}<br />
            <span>({new Date().toLocaleTimeString()} - {new Date(product.timeLeft2).toLocaleDateString()})</span>
            {/* <span>Ends on {new Date(product.timeLeft2).toLocaleDateString()}</span> */}
          </p>
          </div>
          <button className="bid-button">Place a bid</button>
        </div>

        {/* <div className="bidders">
          <h3>Bidders:</h3>
          <div className="avatar-container">
            {product.bidders.map((bidder, index) => (
              <img
                key={index}
                src={bidder.avatar}
                alt={`Bidder ${index + 1}`}
                className="bidder-avatar"
              />
            ))}
          </div>
          <span>{product.bidders.length} people are bidding</span>
        </div> */}
        <div className="bid-history">
          <p>History of bids ({product.bidders.length} people are bidding)</p>
          <Line data={chartData} className="chart" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
