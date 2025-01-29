import React from "react";
import "./EmojiSection.css";

const EmojiSection: React.FC = () => {
  return (
    <div className="emoji-container">
      <div className="content">
        {/* Left: 3D Emoji and Paper Plane */}
        <div className="image-container">
          <img src="/Assets/Left - Image.png" alt="Emoji with paper plane" className="emoji-image" />
        </div>

        {/* Right: Text Content */}
        <div className="text-content">
          <p className="overline">Overline</p>
          <h1 className="title">
            Habitant tristique aliquam in vel scelerisque
          </h1>
          <p className="description">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.
          </p>

          {/* Features */}
                  <div className="features">
                      <FeatureCard image="/Assets/Vector (6).png" title="Sollicitudin sapien" subtitle="Cursus fermentum" />
                      <FeatureCard image="/Assets/Icon.png" title="Pulvinar metus" subtitle="Nunc sed" />
            {/* <FeatureCard title="Sollicitudin sapien" subtitle="Cursus fermentum" />
            <FeatureCard title="Pulvinar metus" subtitle="Nunc sed" />
             */}
            
                      
          </div>

          {/* Buttons */}
          <div className="buttons">
            <button className="primary-emoji-button">Get started</button>
            <button className="secondary-emoji-button">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// const FeatureCard: React.FC<{ title: string; subtitle: string;  }> = ({ title, subtitle }) => (
//   <div className="feature-card">
//     <span className="icon"><img src="/Assets/Vector (6).png" alt="Icon" /></span>
//     <div>
//       <p className="feature-title">{title}</p>
//       <p className="feature-subtitle">{subtitle}</p>
//     </div>
//   </div>

const FeatureCard: React.FC<{ title: string; subtitle: string; image?: string }> = ({ title, subtitle, image }) => (
  <div className="feature-card">
    <span className="icon"><img src={image} alt="Icon" /></span>
    <div>
      <p className="feature-title">{title}</p>
      <p className="feature-subtitle">{subtitle}</p>
    </div>
  </div>
);

export default EmojiSection;
