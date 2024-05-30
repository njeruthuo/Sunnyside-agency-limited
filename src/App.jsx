import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="">
      <div className="min-h-screen home-desktop-bg  ">
        <Navbar />
        <Home />
      </div>
      <About />
    </div>
  );
};
export default App;
