import { Link } from 'react-router-dom';
import './Navbar.css';

const Navabar = ({ handleSideToggle }) => {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <h2>shop.fanny</h2>
      </div>

      <div className='navbar__items'>
        <ul className='navbar__links'>
          <li>
            <Link to='/cart' className='cart__link'>
              <span>
                Cart <span className='cartlogo__badge'>(0)</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to='/' className='navbar__shop'>
              Shop
            </Link>
          </li>
        </ul>

        <div className='hamburger__menu' onClick={handleSideToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navabar;
