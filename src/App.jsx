import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Pricing from "./components/Pricing";
import Testimonals from "./components/Testimonals";
import Workflow from "./components/Workflow";
import Navbar from "./components/navbar";


const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl- mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonals />
        <Footer />


      </div>
      
    </>
  );
};

export default App;
