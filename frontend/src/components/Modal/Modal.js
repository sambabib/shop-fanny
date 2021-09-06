import './Modal.css';

const Modal = ({ handleCloseModal }) => {
  return (
    <div className='modal'>
      <div className='modal__message'>
        <h3>Your Order is Being Processed</h3>
        <p>Thank you for shopping on shop.fanny, your order no is #4444</p>
        <div className='modal-message__button'>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
