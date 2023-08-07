import React from 'react';
import { Link } from 'react-router-dom';

const CartPopup = ({ cartItems, setCartItems, hideCartPopup }) => {
  const calculateTotalPrice = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += parseFloat(calculateTotalPrice(item));
    });
    return subtotal;
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart-popup bg-white border rounded-lg shadow-lg p-4 max-w-xs">
      <div className="cart-header flex justify-between mb-4">
        <h2 className="font-semibold text-lg">Shopping Cart</h2>
        <button className="close-button text-gray-600 hover:text-red-600" onClick={hideCartPopup}>
          Close
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Cart is empty</p>
      ) : (
        <div className="gap-4">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2 last:border-b-0">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <div className="ml-4">
                    <p className="text-sm font-semibold">{item.name}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="quantity-input w-16 py-1 px-2 border rounded text-center"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                  <p className="text-sm font-semibold">${calculateTotalPrice(item)}</p>
                  <button
                    className="remove-button text-red-500 hover:text-red-700 ml-4"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="subtotal text-right">
            <p className="text-gray-600 text-sm">Subtotal:</p>
            <p className="font-semibold">${calculateSubtotal().toFixed(2)}</p>
          </div>
          <Link to="/checkout">
            <button className="checkout-button bg-blue-500 text-white py-2 px-4 w-full rounded">
              Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPopup;
