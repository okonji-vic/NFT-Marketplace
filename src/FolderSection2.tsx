import React from "react";
import "./FolderSection.css";

interface UserCardProps {
  avatar: string;
  username: string;
  items: number;
  collections: number;
  eth: string;
}

const users: UserCardProps[] = [
  {
    avatar: "/Assets/User1.png",
    username: "@brook_sim",
    items: 206,
    collections: 12,
    eth: "4.78 ETH",
  },
  {
    avatar: "/Assets/User2.png",
    username: "@marvinmckin",
    items: 479,
    collections: 24,
    eth: "7.55 ETH",
  },
  {
    avatar: "/Assets/User3.png",
    username: "@esther_howard",
    items: 387,
    collections: 10,
    eth: "5.31 ETH",
  },
];

const FolderSection: React.FC = () => {
  return (
    <div className="folder-section">
      <div className="content">
        <p className="overline">OVERLINE</p>
        <h1 className="title">Cursus vitae sollicitudin donec nascetur. Join now</h1>
        <p className="description">
          Donec volutpat bibendum justo, odio aenean congue est porttitor ut.
          Mauris vestibulum eros libero amet tincidunt.
        </p>
        <div className="buttons">
          <button className="get-started">Get started</button>
          <button className="learn-more">Learn more</button>
        </div>
      </div>
      <div className="image-container">
        <div className="overlay"></div>
        <div className="top-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="user-cards">
          {users.map((user, index) => (
            <div key={index} className={`user-card user-card-${index}`}>
              <img src={user.avatar} alt={user.username} className="avatar" />
              <div className="user-info">
                <p className="username">{user.username}</p>
                <div className="stats">
                  <p className="items">Items {user.items}</p>
                  <p className="collections">Collection {user.collections}</p>
                </div>
                <p className="eth">{user.eth}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FolderSection;
