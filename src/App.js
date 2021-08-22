import "./App.css";
import "./Contact.css";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Logo />
        <Project />
        <About />
        <Contact />
        <Footer />
      </div>
      <div className="ppp">Powered by Jazyl le Shoyo</div>
    </div>
  );
}

export default App;
