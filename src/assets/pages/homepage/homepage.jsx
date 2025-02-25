import { useState, useEffect } from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import "./homepage.css";

const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const bannerImages = [
    {
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      title: "Summer Collection",
      description: "Explore our latest summer styles",
    },
    {
      url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04",
      title: "New Arrivals",
      description: "Check out our fresh picks",
    },
    {
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      title: "Special Offers",
      description: "Limited time deals",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Classic White Sneakers",
      price: 89.99,
      discount: 10,
      description: "Comfortable everyday sneakers",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    },
    {
      id: 2,
      name: "Leather Backpack",
      price: 129.99,
      discount: 0,
      description: "Durable daily companion",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    },
    {
      id: 3,
      name: "Minimal Watch",
      price: 199.99,
      discount: 15,
      description: "Elegant timepiece",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 4,
      name: "Sunglasses",
      price: 79.99,
      discount: 0,
      description: "UV protection with style",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const openQuickView = (product) => {
    setSelectedProduct(product);
    setShowQuickView(true);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner-container">
        {bannerImages.map((banner, index) => (
          <div
            key={index}
            className={`banner-slide ${index === activeSlide ? "active" : ""}`}
          >
            <img src={banner.url} alt={banner.title} className="banner-image" />
            <div className="banner-overlay">
              <h2>{banner.title}</h2>
              <p>{banner.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search Section */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
              {product.discount > 0 && (
                <span className="discount">-{product.discount}%</span>
              )}
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price-section">
              {product.discount > 0 ? (
                <>
                  <span className="original-price">${product.price}</span>
                  <span className="discounted-price">
                    ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="final-price">${product.price}</span>
              )}
            </div>
            <div className="actions">
              <button onClick={() => addToCart(product)}>
                <FiShoppingCart /> Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={wishlist.includes(product.id) ? "wishlist-active" : "wishlist"}
              >
                <FiHeart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;