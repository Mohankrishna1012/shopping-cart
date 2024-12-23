
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Amazon Clone</div>
      <div className="links">
        <Link to="/">Amazon Cart</Link>
        <Link to="/cart-list">Cart List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
