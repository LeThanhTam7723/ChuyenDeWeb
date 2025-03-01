import React from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import './productCard.scss';

const ProductCard = ({product}) => {
  const [wishlist, setWishlist] = React.useState([false]);
  
  return (
    <div key={product.id} className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
              {/* {product.discount > 0 && (
                <div className="discount-tag">-{product.discount}%</div>
              )} */}
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
          <div className="price-container">
            {product.discount > 0 ? (
                  <>
                    <span className="original-price">${product.price}</span>
                    <span className="discounted-price">
                      ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="discounted-price">${product.price}</span>
                )}
              </div>
              <div className="actions">
                <button className="cart-button" onClick="">
                  <FiShoppingCart className="icon" />
                </button>
                <button
                  className="wishlist-button"
                  onClick=""
                >
                  <FiHeart className="icon" />
                </button>
              </div>
            </div>
          </div>
  );
};

export default ProductCard;
