import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Container } from '@mui/material';
import AdminPanel from './admin/AdminPanel';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Visuals from './pages/Visuals';
import Designs from './pages/Designs';
import Dev from './pages/Dev';
import HavyStore from './pages/HavyStore';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <header>
        <Routes>
          <Route path="/admin/*" element={null} />
          <Route path="/*" element={<Navbar />} />
        </Routes>
      </header>

      <main>
       {/* <Container maxWidth="lg"> */}
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
            <Route path="/admin/*" element={<AdminPanel />} />
          </Routes>
        {/* </Container> */}
      </main>

      <footer>
        <Routes>
          <Route path="/admin/*" element={null} />
          <Route path="/*" element={<Footer />} />
        </Routes>
      </footer>
    </div>
  );
}

export default App;
