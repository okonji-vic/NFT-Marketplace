import React from 'react'
import HeroSection from './HeroSection'
import Navbar from './NavBar'
import LiveAuctions from './LiveAuctions'
import BiddingList from './BiddingList'
import TextImageSection from './TextImageSection'
import TripleSection from './TripleSection'
import EmojiSection from './EmojiSection'
import PopularAuctions from './PopularAuctions'
import './styles.css'



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
    </div>
  );
}

export default App;
