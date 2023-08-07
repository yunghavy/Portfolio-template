import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './store.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';
import categories from './data';
import ProductDetailsPage from './ProductDetailsPage';

const HavyStore = () => {
  const [isStoreActive, setStoreActive] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const handleCartIconClick = () => {
    console.log('handleCartIconClick is called');
    setStoreActive(!isStoreActive);
  };
  const carouselItems = [
    {
      image: 'https://images.pexels.com/photos/10622522/pexels-photo-10622522.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Black November Deals',
      description: 'This is the description for item 1.',
    },
    {
      image: 'https://images.pexels.com/photos/3002552/pexels-photo-3002552.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Offer on Templates',
      description: 'This is the description for item 2.',
    },
    {
      image: 'https://images.pexels.com/photos/3263460/pexels-photo-3263460.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'New Merch',
      description: 'This is the description for item 3.',
    },

  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const handleCategoryFilter = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const renderProducts = (products) => {
    return products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">
          <Link to={`/product/${product.id}`} onClick={() => setSelectedProduct(product)}>
            {product.name}
          </Link>
        </h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    ));
  };

  return (
    <div className={`bg-gray-100 min-h-screen ${isStoreActive ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <main className="main-content px-8 py-10">
        <div className="product-categories py-12">
          <div className="category-filters mb-6">
            {/* Category filter buttons */}
            <button
              className={`category-filter-button ${selectedCategory === 'All Products' ? 'active' : ''}`}
              onClick={() => handleCategoryFilter('All Products')}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                className={`category-filter-button ${selectedCategory === category.name ? 'active' : ''}`}
                onClick={() => handleCategoryFilter(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <Slider {...settings}>
            {carouselItems.map((item, index) => (
              <div key={index} className="carousel-item">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </Slider>

          {/* Pass the 'selectedProduct' state to the ProductDetailsPage component */}
          <div>
            {selectedProduct && <ProductDetailsPage product={selectedProduct} />}
          </div>

          {/* Product categories and filters */}
          {categories.map((category) => (
            <div
              key={category.name}
              className={`category-section mb-8 ${selectedCategory === 'All Products' || selectedCategory === category.name ? '' : 'hidden'}`}
            >
              <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
              <div className="grid grid-cols-4 gap-4">
                {/* Render products for the selected category */}
                {renderProducts(category.products)}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Navbar handleCartIconClick={handleCartIconClick} />
      <div style={{ height: '100px' }}></div>
    </div>
  );
};

export default HavyStore;