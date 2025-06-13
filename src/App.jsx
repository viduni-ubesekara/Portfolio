import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Skills,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="hero-section" style={{ backgroundImage: 'url("src/assets/herobg.jpg")', backgroundPosition: 'right', backgroundSize: '50%', height: '100vh' }}>
            <Hero />
          </div>
        </div>
        <About />
        <Education />
        <Skills />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
