import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Gallery from './components/gallery/Gallery';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      
      <Services />
      <Qualification />
      <Testimonials />
      <Gallery />
      <Contact />
     </main>
     <ScrollUp />
     <Footer />  
    </>
  );
}

export default App;

/* Add feature which allows text to fade in when scrolling */