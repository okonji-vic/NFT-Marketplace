import React from "react";
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



const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar /> 
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>

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