import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import HeroSection from './components/HeroSection/HeroSection';
import Howitwork from './components/Howitwork/Howitwork';
import Services from './components/Services/Services';
import Us from './components/Us/Us';
import Why from './components/Why/Why';


function App() {
  return (
    <>
      <HeroSection />
      <Howitwork />
      <Why />
      <Us />
      <Services />
      {/* <ContactUs /> */}
    </>
  );
}

export default App;
