
# NFT Marketplace - Product Details & Components

## Overview
This project is a React-based typescript NFT marketplace featuring various reusable and responsive components. It includes a **Product Details Component** for viewing NFT bidding items, real-time auction countdowns, and bid history visualization using Chart.js.

## Features
- **Dynamic Product Display**: Retrieves product details based on the route parameter.
- **Live Auction Countdown**: Updates the remaining auction time dynamically.
- **Bid History Chart**: Visualizes price changes over time using Chart.js.
- **Bidders List**: Displays avatars of users currently bidding on the item.
- **Responsive Design**: Styled using `ProductDetail.css` for a seamless user experience.
- **Fully Modular Components**: Each section of the marketplace is built with reusable components.

## Tech Stack
- **React**: Component-based UI rendering.
- **TypeScript**: Ensures type safety and better development experience.
- **React Router**: Handles dynamic routing (`useParams` to fetch product details based on URL parameters).
- **Chart.js**: Generates a line chart to visualize bidding history.
- **CSS & Tailwind CSS**: Custom styling for enhanced UI/UX.

## Components
### 1. NavBar
- **Description**: A responsive navigation bar with links and branding.
- **Key Features**: Sticky header, mobile-friendly, accessibility support.
- **Implementation**: Hamburger menu for small screens.

### 2. HeroSection
- **Description**: A visually appealing section introducing the marketplace.
- **Key Features**: Dynamic text, call-to-action buttons, background image.
- **Implementation**: Uses grid/flexbox for layout consistency.

### 3. BiddingList
- **Description**: Displays a list of active NFT bids with details.
- **Key Features**: Real-time bid updates, price indicators.
- **Implementation**: Uses mapping functions to render bid items dynamically.

### 4. TextImageSection
- **Description**: A section combining text with an image for promotional content.
- **Key Features**: Adaptive image positioning, responsive text.
- **Implementation**: Uses flexbox for text-image alignment.

### 5. TripleSection
- **Description**: Displays three key features or categories.
- **Key Features**: Grid-based layout, hover effects.
- **Implementation**: Uses CSS grid for equal distribution.

### 6. EmojiSection
- **Description**: A fun, engaging section with emojis highlighting features.
- **Key Features**: Animated icons, color highlights.
- **Implementation**: Uses Framer Motion for smooth animations.

### 7. PopularAuctions
- **Description**: Highlights trending NFT auctions.
- **Key Features**: Dynamic listing, user engagement metrics.
- **Implementation**: Fetches and renders auction data dynamically.

### 8. FolderSection
- **Description**: Showcases user profiles with an engaging UI layout.
- **Key Features**: Dynamic user card placement, overlay effects, gradient styling.
- **Implementation**: Uses absolute positioning for user cards.

### 9. ScrollGallery
- **Description**: A horizontally scrolling NFT gallery with carousel effect.
- **Key Features**: Auto-scrolling, hover interactions, shadow/glow effects.
- **Implementation**: Uses CSS keyframe animations for continuous scrolling.

### 10. Footer
- **Description**: A sleek, responsive footer component.
- **Key Features**: Three-column layout, blurred shadow effect, social media icons.
- **Implementation**: Uses CSS Grid for structured content alignment.

## Implementation Details
### **Fetching Product Data**
The component extracts the product `id` from the URL using `useParams` and filters the item from the `items` array.

### **Auction Countdown Timer**
- Uses `useEffect` and `setInterval` to update the remaining time until the auction ends.
- When the timer reaches zero, the auction status updates to "Auction Ended."

### **Bid History Visualization**
- Uses `Chart.js` to create a line chart displaying historical bid prices.
- Data points are mapped from the `bidHistory` array.

### **Bidders Display**
- Lists bidder avatars in a horizontal scrollable format.
- Shows the total number of bidders.

## Installation & Usage
### **Clone the repository**
```sh
 git clone https://github.com/okonji-vic/Tobams-group-internship-assessment.git
```

### **Navigate to the project directory**
```sh
 cd nft-marketplace
```

### **Install dependencies**
```sh
 npm install
```

### **Run the project**
```sh
 npm run dev
```

### **Open in VS Code**
```sh
 code .
```

### **Site**
```sh
 https://nft-marketplace-001.netlify.app/
```

## Future Improvements
- Implement API integration for fetching real-time auction data.
- Add user authentication for placing bids.
- Enhance UI with animations and interactive elements.

## Contribution
Feel free to submit pull requests or report issues to improve these components.

## License
This project is open-source under the MIT License.



