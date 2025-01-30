import "./herosection.css"


const HeroSection = () => {
    return (
      <section className="hero">
        <div className="container">
          
          <h1>
                    A new NFT<img src="./Assets/Frame.png" alt="icon-half"/> <br />
                    <img src="./Assets/Frame (1).png" alt="icon-half"/><span className="highlight">Experience</span>
          </h1>
          {/* <img src="./Assets/Background.png" alt="background image" className="background-image" /> */}
          <p className="subtitle">
            Discover, collect and sell
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search items, collections and creators"
              className="search-input"
                    />
                    
                    <select name="category" id="category" className="search-select">
                        <option value="all">Category</option> 
                        </select>
                        <img src="./Assets/Search Icon.png" alt="Search" />
          </div>
          <div className="hero-icons">
            <img src="./Assets/Ritter Sport.png" alt="icon-half" />
            <img src="./Assets/Nike.png" alt="icon-half" />
            <img src="./Assets/Adidas.png" alt="icon-half" />
            <img src="./Assets/Vector (5).png" alt="icon-half" />
          </div>
          <div className="absolute-positioning-img">
            <img src="./Assets/Square 06.png" alt="icon-half absolute" />
            <img src="./Assets/Square 04.png" alt="icon-half absolute" />
            <img src="./Assets/Square 05.png" alt="icon-half absolute" />
            <img src="./Assets/Square 01.png" alt="icon-half absolute" />
            <img src="./Assets/Square 02.png" alt="icon-half absolute" />
            <img src="./Assets/Square 03.png" alt="icon-half absolute" />
          </div>
        </div>
      </section>
    );
};
  
export default HeroSection;