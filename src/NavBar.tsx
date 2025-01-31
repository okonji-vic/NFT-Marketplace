import "./Navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar">
        <img src="/Assets/Sygnet.png" alt="NFT Market"  className="logo_image"/>
            
        <ul className="nav-links">
          <li><a href="#">Auctions</a></li>
          <li><a href="#">Roadmap</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Community</a></li>
            </ul>
            <div>
            <button className="btn-primary contact">Contact</button>
        <button className="btn-primary">My Account</button>
            </div>
      </nav>
    );
  };
  
  
export default Navbar;