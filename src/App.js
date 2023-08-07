import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Visuals from './components/Visuals';
import Designs from './components/Designs';
import Dev from './components/Dev';
import HavyStore from './components/HavyStore';
import ProductDetailsPage from './components/ProductDetailsPage';

function App() {
  return (
<>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/visuals" element={<Visuals />} />
        <Route exact path="/designs" element={<Designs />} />
        <Route exact path="/dev" element={<Dev />} />
        <Route exact path="/havystore" element={<HavyStore />} />
        <Route exact path="/product/:id" element={<ProductDetailsPage />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
</>
  );
}

export default App;
