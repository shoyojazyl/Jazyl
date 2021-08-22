import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="#home" className="navbar-link">
          <b>BR</b> Architects
        </a>
      </div>
      <div className="navbar-right">
        <a href="#Projects" className="navbar-link">
          Projects
        </a>
        <a href="#about" className="navbar-link">
          About
        </a>
        <a href="#contact" className="navbar-link">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
