import React from "react";
import { motion } from "framer-motion";
import "./TextImageSection.css";

const TextImageSection: React.FC = () => {
  return (
    <section className="text-image-section">
      <div className="text-content">
        <p className="overline">OVERLINE</p>
        <h1 className="headline">
          Sapien ipsum <br /> scelerisque <br /> convallis fusce
        </h1>
        <p className="description">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam
          tempor pulvinar ultricies dolor feugiat aliquam commodo.
        </p>
        <div className="buttons">
          <button className="primary-button">Get started</button>
          <button className="secondary-button">Learn more</button>
        </div>
      </div>
      <motion.div
        className="image-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/Assets/Right - Image.png" alt="3D graphic" className="image" />
      </motion.div>
    </section>
  );
};

export default TextImageSection;
