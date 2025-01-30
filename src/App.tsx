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

// const App: React.FC = () => {

//   return (
//     // <Router>
//     <div>

//       <Navbar />
//       <HeroSection />
//       
//         <BiddingList />
//         {/* <Routes> */}
//           {/* <Route path="/" element={<BiddingList />} /> */}
//           {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
//         {/* </Routes> */}
//       <TextImageSection />
//       <TripleSection />
//       <EmojiSection />
//       <PopularAuctions />
//       <SectionWithIconContainer />
//       <FolderSection />
//       <ScrollGallery />
//       <Footer />
//      
//       </div>
//     // </Router>
//   );
// };

// export default App;


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Always render Navbar */}
        
        {/* Routes are used to conditionally render the content */}
        <Routes>
          {/* Home route will render BiddingList and other sections */}
          <Route path="/" element={<HomePage />} />
          
          {/* Product detail route will render only ProductDetail */}
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>

        <Footer /> {/* Always render Footer */}
      </div>
    </Router>
  );
};

// HomePage component renders all sections except when on the product detail page
const HomePage: React.FC = () => {
  return (
    <div>
      {/* Only render these sections when on the home page */}
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