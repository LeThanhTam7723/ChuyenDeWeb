import { useState, useEffect } from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import "./HomePageView.css";
import ProductCard from "../../../components/product_card/productCard.jsx";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");// chức năng tìm kiếm
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const bannerImages = [
    {
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      title: "Bibendum et sit aliquam!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.",
    },
    {
      url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04",
      title: "Bibendum et sit aliquam!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.",
    },
    {
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      title: "Bibendum et sit aliquam!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.",
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
    {
      id: 5,
      name: "Classic White Sneakers",
      price: 89.99,
      discount: 10,
      description: "Comfortable everyday sneakers",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    },
    {
      id: 6,
      name: "Leather Backpack",
      price: 129.99,
      discount: 0,
      description: "Durable daily companion",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    },
    {
      id: 7,
      name: "Minimal Watch",
      price: 199.99,
      discount: 15,
      description: "Elegant timepiece",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 8,
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
  // pHần này của categories
  const categories = [
    {
      id: 1,
      name: "Fresh Fruit",
      image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b",
      count: "45 Items"
    },
    {
      id: 2,
      name: "Vegetables",
      image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7",
      count: "32 Items"
    },
    {
      id: 3,
      name: "Meat",
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f",
      count: "25 Items"
    },
    {
      id: 4,
      name: "Fish & Seafood",
      image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62",
      count: "28 Items"
    },
    {
      id: 5,
      name: "Dairy & Eggs",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
      count: "15 Items"
    },
    {
      id: 6,
      name: "Fast Food",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5",
      count: "22 Items"
    }
  ];
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategoryIndex((prev) => (prev + 1) % Math.max(0, categories.length - 4));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-container">
      <div className="banner-section">
        {bannerImages.map((banner, index) => (
          <div
            key={index}
            className={`banner-slide ${index === activeSlide ? "active" : ""}`}
          >
            <img src={banner.url} alt={banner.title} className="banner-image" />
            <div className="banner-overlay">
              <div className="banner-title-form">
                <h2 className="banner-title">{banner.title}</h2>
                <p className="banner-description">{banner.description}</p>
                <button>Discover Menu</button>
              </div>
              
            </div>
          </div>
        ))}
      </div>
      <div className="search-section">
        <h1>Các danh mục sản phẩm</h1>
      </div>
      <div className="categories-slider">
        <button
          onClick={() => setActiveCategoryIndex((prev) => Math.max(0, prev - 1))}
          className="slider-button left"
        >
          <FaChevronLeft />
        </button>

        <div className="categories-list">
          {/* Nhân bản danh sách categories để tạo hiệu ứng lặp lại */}
          {[...categories, ...categories].map((category, index) => (
            <div key={`${category.id}-${index}`} className="category-item">
              <div className="category-image-container">
                <img src={category.image} alt={category.name} className="category-image" />
                <div className="category-overlay">
                  <div className="category-info">
                    <h3>{category.name}</h3>
                    <p>{category.count}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setActiveCategoryIndex((prev) => Math.min(categories.length - 4, prev + 1))}
          className="slider-button right"
        >
          <FaChevronRight />
        </button>
      </div>



      <div className="search-section">
        <h1>Các sản phẩm phổ biến</h1>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
          key={product.id}
          product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
