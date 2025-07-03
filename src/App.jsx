import Navbar from './Navbar';
import Cart from './Cart';
import Contact from './Contact';
import Footer from './Footer';
import Service from './Service';
import HeroSection from './Herosection';

function App() {
  return (
    
  <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Cart />
      <Service />
      <Contact />
      <Footer />
  </div>

  );
}

export default App;
