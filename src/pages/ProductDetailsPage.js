import React, { useState, useEffect, useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useParams, useNavigate } from 'react-router-dom';
import categories from '../components/data';
import CartPopup from '../components/CartPopup';
import { CartContext } from '../CartContext';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [addedProducts, setAddedProducts] = useState([]);
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);

  const [notification, setNotification] = useState('');

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000); 
  };

  useEffect(() => {
    const foundProduct = categories.reduce((foundProduct, category) => {
      if (!foundProduct) {
        return category.products.find((product) => product.id === id);
      }
      return foundProduct;
    }, null);

    setSelectedProduct(foundProduct);
  }, [id]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
  
    if (existingItemIndex !== -1) {
      showNotification('Product has already been added to the cart');
      return;
    }
  
    const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(updatedCartItems);
    setShowCartPopup(true);
  };


  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };
  
  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleContinueShopping = () => {
    console.log('Continue Shopping clicked');
    setShowCartPopup(false);
    navigate('/havystore'); 
  };

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  const specifications = selectedProduct.specifications || [];

  const isAddedToCart = addedProducts.includes(selectedProduct.id);

  

  return (
    <div className="product-details-container">
      <div className="product-image-container">
        <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
        {/* You can add more images here with different classes for styling */}
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <h4>Price: ${selectedProduct.price.toFixed(2)}</h4>

          <div className="product-specs">
            <h3>Specifications</h3>
            <ul>
              {specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
            <p>{selectedProduct.info}</p>
          </div>

          <button
            className="buy-now-btn"
            onClick={() => addToCart(selectedProduct)}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? 'Product Added to Cart' : 'Add to Cart'}
          </button>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>Continue Shopping</button>
        </div>
      </div>
      {/* Add the custom cart icon with the badge */}
      <div className="custom-cart-icon" onClick={() => setShowCartPopup(!showCartPopup)}>
        <FiShoppingCart size={24} />
        {cartItems.length > 0 && (
          <div className="cart-badge">{cartItems.reduce((total, item) => total + item.quantity, 0)}</div>
        )}
      </div>
      {/* Notification Popup */}
     {notification && <div className="notification">{notification}</div>}  
       {/* Render the CartPopup component */}
       {showCartPopup && (
        <CartPopup
          cartItems={cartItems}
          setCartItems={setCartItems}
          handleRemoveItem={handleRemoveItem}
          handleQuantityChange={handleQuantityChange}
          hideCartPopup={() => {
            setShowCartPopup(false);
            setAddedProducts([]); 
          }}
        />
      )}
    </div>
  );
};
  export default ProductDetailsPage;