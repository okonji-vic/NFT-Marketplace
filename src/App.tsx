import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "./NavBar";
import LiveAuctions from "./LiveAuctions";
import BiddingList from "./BiddingList";
import TextImageSection from "./TextImageSection";
import TripleSection from "./TripleSection";
import EmojiSection from "./EmojiSection";
import PopularAuctions from "./PopularAuctions";
import "./styles.css";
import SectionWithIconContainer from "./SectionWithIcon";
import FolderSection from "./FolderSection";
// import FolderSection2 from "./FolderSection2";
import ScrollGallery from "./ScrollGallery";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <LiveAuctions /> */}
      <BiddingList />
      <TextImageSection />
      <TripleSection />
      <EmojiSection />
      <PopularAuctions />
      <SectionWithIconContainer />
      <FolderSection />
      <ScrollGallery />
      <Footer />
      {/* <FolderSection2 /> */}
    </div>
  );
};

export default App;
