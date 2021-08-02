import { Link } from 'react-router-dom';
import './SideDrawer.css';

const SideDrawer = ({ sideDrawerToggle, close }) => {
  const sideDrawerClass = ['sidedrawer'];

  if (sideDrawerToggle) {
    sideDrawerClass.push('sideDrawerToggle');
  }
  return (
    <div className={sideDrawerClass.join(' ')}>
      <i className='fas fa-times sidedrawer__close' onClick={close}></i>
      <ul className='sidedrawer__links'>
        <li>
          <Link to='/cart'>
            <span>Cart</span><span className='sidedrawer__badge'>(0)</span>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <span>Shop</span>
          </Link>
        </li>
        <li>Woman</li>
        <li>Man</li>
        <li>Kids</li>
      </ul>
    </div>
  );
};

export default SideDrawer;
