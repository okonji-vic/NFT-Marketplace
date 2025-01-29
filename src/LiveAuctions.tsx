

const LiveAuctions = () => {
    return (
      <section className="live-auctions">
        <div className="container">
          <h2 className="section-title">Latest Live Auctions</h2>
          <div className="auction-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="auction-item">
                <img src={`/images/nft${item}.jpg`} alt="NFT Item" className="auction-image" />
                <h3 className="auction-title">NFT Item {item}</h3>
                <p className="auction-price">2.5 ETH</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  
export default LiveAuctions;
  