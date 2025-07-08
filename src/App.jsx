import Navbar from './Navbar';
import Cart from './Cart';
import Contact from './Contact';
import Footer from './Footer';
import Service from './Service';
import HeroSection from './Herosection';
import Questions from './Questions';

function App() {
  return (
    
  <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Cart />
      <Service />
      <Questions />
      <Contact />
      <Footer />
  </div>

  );
}

export default App;
