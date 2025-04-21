import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav-bar">
      <h1 className="logo">Marvel Meals</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/meals">Meals</Link>
        <Link to="/search" className="hover:text-red-400">Search</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
