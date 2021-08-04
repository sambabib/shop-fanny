import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SideDrawer.css';

const SideDrawer = ({ sideDrawerToggle, close }) => {
  const sideDrawerClass = ['sidedrawer'];

  if (sideDrawerToggle) {
    sideDrawerClass.push('sideDrawerToggle');
  }

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, cartItem) => qty + Number(cartItem.qty), 0);
  };

  return (
    <div className={sideDrawerClass.join(' ')}>
      <i className='fas fa-times sidedrawer__close' onClick={close}></i>
      <ul className='sidedrawer__links'>
        <li>
          <Link to='/cart' onClick={close}>
            <span>Cart</span><span className='sidedrawer__badge'>({getCartCount()})</span>
          </Link>
        </li>
        <li>
          <Link to='/' onClick={close}>
            <span>Shop</span>
          </Link>
        </li>
        <li style={{color: 'gray'}}>Woman</li>
        <li style={{color: 'gray'}}>Man</li>
        <li style={{color: 'gray'}}>Kids</li>
      </ul>
    </div>
  );
};

export default SideDrawer;
