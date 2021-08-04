import { Link } from 'react-router-dom';
import './CartItem.css';

const CartItem = ({ cartItem, handleQtyChange }) => {
  return (
    <div className='cartitem'>
      <div className='cartitem__image'>
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>

      <div className='cartitem__info'>
        <Link to={`/product/${cartItem.product}`} className='cartitem__name'>
          <p>{cartItem.name}</p>
        </Link>

        <p className='cartitem__price'>${cartItem.price}</p>

        <select
          value={cartItem.qty}
          onChange={(e) => handleQtyChange(cartItem.product, e.target.value)}
          className='cartitem__select'
        >
          {[...Array(cartItem.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>

        <div className='cartitem__deleteBtn'>
          <i className='fas fa-trash'></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
