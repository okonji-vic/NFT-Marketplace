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
    avatar: "/Assets/Ellipse.png",
    username: "@brook_sim",
    items: 206,
    collections: 12,
    eth: "4.78 ETH",
  },
  {
    avatar: "/Assets/Ellipse (1).png",
    username: "@marvinmckin",
    items: 479,
    collections: 24,
    eth: "7.55 ETH",
  },
  {
    avatar: "/Assets/Ellipse (2).png",
    username: "@esther_howard",
    items: 387,
    collections: 10,
    eth: "5.31 ETH",
    },
    {
        avatar: "/Assets/Ellipse (3).png",
        username: "@brooks_sim",
        items: 205,
        collections: 18,
        eth: "3.78 ETH",
    },
    {
        avatar: "/Assets/Ellipse (4).png",
        username: "@brooks_sim",
        items: 306,
        collections: 14,
        eth: "6.78 ETH",
    },
    // {
    //     avatar: "/Assets/Ellipse (6).png",
    //     username: "@mitchell_lucas",
    //     items: 306,
    //     collections: 14,
    //     eth: "6.78 ETH",
    // },
    // {
    //     avatar: "/Assets/Ellipse (7).png",
    //     username: "@daisy_watson",
    //     items: 156,
    //     collections: 8,
    //     eth: "2.78 ETH",
    // },
    // {
    //     avatar: "/Assets/Ellipse (8).png",
    //     username: "@mitchell_lucas",
    //     items: 306,
    //     collections: 14,
    //     eth: "6.78 ETH",
    // },
    // {
    //     avatar: "/Assets/Ellipse (9).png",
    //     username: "@daisy_watson",
    //     items: 156,
    //     collections: 8,
    //     eth: "2.78 ETH",
    // },
    // {
    //     avatar: "/Assets/Ellipse (10).png",
    //     username: "@mitchell_lucas",
    //     items: 306,
    //     collections: 14,
    //     eth: "6.78 ETH",
    // },
    // {
    //     avatar: "/Assets/Ellipse (11).png",
    //     username: "@daisy_watson",
    //     items: 156,
    //     collections: 8,
    //     eth: "2.78 ETH",
    // },
    // {
    //     avatar: "/Assets/Ellipse (12).png",
    //     username: "@mitchell_lucas",
    //     items: 306,
    //     collections: 14,
    //     eth: "6.78 ETH",
    // },
    // {
    //     avatar: "/Assets/Ellipse (13).png",
    //     username: "@daisy_watson",
    //     items: 156,
    //     collections: 8,
    //     eth: "2.78 ETH",
    // },
];

const FolderSection: React.FC = () => {
  return (
    <div className="folder-section">
      <div className="content-folder">
        <p className="overline-folder">OVERLINE</p>
        <h1 className="title-folder">Cursus vitae sollicitudin donec nascetur. Join now</h1>
        <p className="description">
          Donec volutpat bibendum justo, odio aenean congue est porttitor ut.
          Mauris vestibulum eros libero amet tincidunt.
        </p>
        <div className="buttons-folder">
          <button className="get-started-folder">Get started</button>
          <button className="learn-more-folder">Learn more</button>
        </div>
        </div>
          
      <div className="user-cards">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img src={user.avatar} alt={user.username} className="avatar" />
                <div className="user-info">
                    <div>
                     <p className="username">{user.username}</p>
                     <p className="eth">{user.eth}</p>
                    </div>
                    <div className="user-stats">
                      <p className="items">Items {user.items}</p>
                      <p className="collections">Collection {user.collections}</p>
                    </div>
              
                </div>
                
          </div>
        ))}
              <img src="/Assets/Ellipse (5).png" alt="Folder" className="folder-image " />
          </div>
          
    </div>
  );
};

export default FolderSection;
