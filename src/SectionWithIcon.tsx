import React from "react";
import "./SectionWithIcon.css";

interface SectionItem {
  icon: string;
  number: string;
  text: string;
}

interface SectionWithIconProps {
  items: SectionItem[];
}

const SectionWithIcon: React.FC<SectionWithIconProps> = ({ items }) => {
  return (
    <div className="sections-icon-container">
      {items.map((item, index) => (
        <div key={index} className="section-with-icon">
          <div className="icon-container">
            <img src={item.icon} alt="Icon" className="icon" />
          </div>
          <div className="text-content">
            <h2 className="icon-number">{item.number}</h2>
            <p className="icon-description">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const data: SectionItem[] = [
  { icon: "/Assets/Vector (7).png", number: "400k", text: "User Active" },
  { icon: "/Assets/Artists Icon.png", number: "52.5k", text: "Artwork" },
  { icon: "/Assets/Artworks Icon.png", number: "17.5k", text: "Artist" },
  { icon: "/Assets/Wallet Icon.png", number: "35.58", text: "ETH Spent" },
];

const SectionWithIconContainer = () => {
  return <SectionWithIcon items={data} />;
};



export default SectionWithIconContainer;
