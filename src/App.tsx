import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import Navbar from "./NavBar";
import BiddingList from "./BiddingList";
import ProductDetail from "./ProductDetail";
import TextImageSection from "./TextImageSection";
import TripleSection from "./TripleSection";
import EmojiSection from "./EmojiSection";
import PopularAuctions from "./PopularAuctions";
import "./styles.css";
import SectionWithIconContainer from "./SectionWithIcon";
import FolderSection from "./FolderSection";
import ScrollGallery from "./ScrollGallery";
import Footer from "./Footer";
// import { use } from "framer-motion/client";



const App: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 820;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);
  return (
    <Router>
      <div>
        {width > breakpoint ? (
          <>
          <Navbar /> 
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
            </>
        ) : (
          <div className="div-container">
            <p>
              This page is best viewed on Desktop. Please resize your browser window to view the desktop version.
            </p>
          </div>
        )}

        <Footer /> 
      </div>
    </Router>
  );
};

const HomePage: React.FC = () => {
  
  
  return (
    
      <div>
      
      <HeroSection />
      <BiddingList />
      <TextImageSection />
      <TripleSection />
      <EmojiSection />
      <PopularAuctions />
      <SectionWithIconContainer />
      <FolderSection />
      <ScrollGallery />
      </div>
    
      
    
  );
};

export default App;