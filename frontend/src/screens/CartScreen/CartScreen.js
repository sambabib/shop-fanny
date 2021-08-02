import './CartScreen.css';
import CartItem from '../../components/CartItem/CartItem';

const CartScreen = () => {
  return (
    <div className='cartscreen'>
      <h2>Shopping Cart</h2>
      <p className='cartscreen__number'>
        <span>0</span> items
      </p>
      <div className='cartscreen__main'>
        <CartItem />
        <CartItem />
        <CartItem />
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
