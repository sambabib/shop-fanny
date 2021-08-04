import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartScreen.css';
import CartItem from '../../components/CartItem/CartItem';

// @actions
import { addToCart } from '../../redux/actions/cartActions';

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const handleQtyChange = (qty, id) => {
    dispatch(addToCart(qty, id));
  };

  return (
    <div className='cartscreen'>
      <h2>Shopping Cart</h2>
      <p className='cartscreen__number'>
        <span>0</span> items
      </p>
      <div className='cartscreen__main'>
        {cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} handleQtyChange={handleQtyChange} />
        ))}
      </div>

      <div className='cartscreen__footer'>
        <div className='cartscreen__gift'>
          <p>Gift Options</p>
          <p className='cartscreen__receipt'>Gift Receipt</p>
        </div>

        <div className='cartscreen__info'>
          <p>Subtotal (0)</p>
          <p>$499.99</p>
        </div>

        <div className='cartscreen-footer__button'>
          <button type='button'>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
