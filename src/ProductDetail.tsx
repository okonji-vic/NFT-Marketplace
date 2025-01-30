// import React from "react";
// import { useParams } from "react-router-dom";
// import "./BiddingList.css";

// const items = [
//   {
//     id: 1,
//     image: "/Assets/bidding-image 2.jpeg",
//     title: "Vulputate felis purus viverra morbi facilisi eget",
//     timeLeft: "2:41 min left",
//     price: 2.55,
//   },
//   {
//     id: 2,
//     image: "/Assets/Item (1).png",
//     title: "Dui accumsan leo vestibulum ornare eu",
//     timeLeft: "22:59 min left",
//     price: 3.19,
//   },
// ];

// const ProductDetail: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const product = items.find((item) => item.id === Number(id));

//   if (!product) return <h2>Product not found</h2>;

//   return (
//     <div className="product-detail">
//       <img src={product.image} alt={product.title} className="product-image" />
//       <div className="product-info">
//         <h1>{product.title}</h1>
//         <p>Current price: {product.price} ETH</p>
//         <p>Time left: {product.timeLeft}</p>
//         <button className="bid-button">Place a bid</button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

// Define the BiddingItem type
interface BiddingItem {
  id: number;
  image: string;
  title: string;
  timeLeft: string;
  likes: number;
  bidders: { avatar: string }[];
  price: number;
}

// Items array
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

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = items.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>Current price: {product.price} ETH</p>
        <p>Time left: {product.timeLeft}</p>
        <p>Likes: {product.likes}</p>

        {/* Bidders Section */}
        <div className="bidders">
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
        </div>

        <button className="bid-button">Place a bid</button>
      </div>
    </div>
  );
};

export default ProductDetail;
