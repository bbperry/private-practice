import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Header/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Resources from './components/Resources/Resources';
import Rates from './components/Payment/Rates';
import Insurance from './components/Payment/Insurance';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/Insurance" element={<Insurance />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
