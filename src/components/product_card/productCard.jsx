import React, { useState } from "react";
import { FaHeart, FaShare, FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import "./ProductCard.scss";

const ProductCard = ({product}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardSpring = useSpring({
    transform: isHovered ? "scale(1.03)" : "scale(1)",
    boxShadow: isHovered
      ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  });

  const shareSpring = useSpring({
    opacity: showShare ? 1 : 0,
    transform: showShare ? "translateY(0)" : "translateY(20px)",
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="star full" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="star half" />);
      } else {
        stars.push(<FaStar key={i} className="star empty" />);
      }
    }
    return stars;
  };

  return (
    <animated.div
      style={cardSpring}
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label="Product Card"
    >
      <div className="image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1560393464-5c69a73c5770";
          }}
        />
      </div>

      <div className="product-info">
        <h2 className="product-title" title={product.name}>
          {product.name}
        </h2>

        <div className="rating" aria-label="Product rating: 4.5 out of 5 stars">
          {renderStars(4.5)}
          <span className="rating-value">(4.5)</span>
        </div>

        <p className="price">$129.99</p>

        <div className="actions">
          <button className="add-to-cart">
            <FaShoppingCart className="icon" />
            Add to Cart
          </button>

          <div className="wishlist-share">
            <button
              className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
              onClick={() => setIsWishlisted(!isWishlisted)}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <FaHeart />
            </button>

            <div className="share-container">
              <button
                className="share-btn"
                onClick={() => setShowShare(!showShare)}
                aria-label="Share product"
              >
                <FaShare />
              </button>

              {showShare && (
                <animated.div style={shareSpring} className="share-popup">
                  <button className="facebook">F</button>
                  <button className="twitter">T</button>
                </animated.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default ProductCard;
