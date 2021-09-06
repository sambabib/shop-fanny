import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navabar = ({ handleSideToggle }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, cartItem) => qty + Number(cartItem.qty), 0);
  };

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'>
          <h2>shop.fanny</h2>
        </Link>
      </div>

      <div className='navbar__items'>
        <ul className='navbar__links'>
          <li>
            <Link to='/cart' className='cart__link'>
              <span>
                Cart <span className='cartlogo__badge'>({getCartCount()})</span>
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
