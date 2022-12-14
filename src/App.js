import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import HeroSection from './components/HeroSection/HeroSection';
import Howitwork from './components/Howitwork/Howitwork';
import Services from './components/Services/Services';
import Us from './components/Us/Us';
import Why from './components/Why/Why';


function App() {
  return (
    <div className='h-full max-w-[1620px] flex flex-col m-auto'>
      <HeroSection />
      <Howitwork />
      <Why />
      <Us />
      <Services />
      <ContactUs />
    </div>
  );
}

export default App;
