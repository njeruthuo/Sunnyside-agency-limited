import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="">
      <div className="min-h-screen home-desktop-bg  ">
        <Navbar />
        <Home />
      </div>
      <About />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
};
export default App;
