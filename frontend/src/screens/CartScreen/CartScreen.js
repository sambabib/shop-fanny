import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartScreen.css';

// @components
import CartItem from '../../components/CartItem/CartItem';
import Modal from '../../components/Modal/Modal';

// @actions
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

const CartScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const handleQtyChange = (qty, id) => {
    dispatch(addToCart(qty, id));
  };

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  useEffect(() => {
    dispatch(removeFromCart());
  }, [dispatch]);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, cartItem) => Number(cartItem.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce(
      (price, cartItem) => cartItem.price * cartItem.qty + price,
      0
    );
  };

  return (
    <div className='cartscreen'>
      <h2>Shopping Cart</h2>
      <p className='cartscreen__number'>
        <span>{getCartCount()}</span> items
      </p>
      <div className='cartscreen__main'>
        {cartItems.length === 0 ? (
          <h2>Cart is Empty</h2>
        ) : (
          cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.product}
              cartItem={cartItem}
              handleQtyChange={handleQtyChange}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))
        )}
      </div>

      <div className='cartscreen__footer'>
        <div className='cartscreen__gift'>
          <p>Gift Options</p>
          <p className='cartscreen__receipt'>Gift Receipt</p>
        </div>

        <div className='cartscreen__info'>
          <p>Subtotal ({getCartCount()})</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>

        <div className='cartscreen-footer__button'>
          <button type='button' onClick={handleOpenModal}>Proceed to checkout</button>
          {showModal ? <Modal handleCloseModal={handleCloseModal} /> : null}
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
