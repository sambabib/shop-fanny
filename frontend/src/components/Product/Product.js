import { Link } from 'react-router-dom';
import './Product.css';

const Product = () => {
  return (
    <div className='product'>
      <img
        src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
        alt='product 1'
      />

      <div className='product__info'>
        <p className='info__name'>Playstation 5</p>
        <p className='info__price'>$499.99</p>

        <Link to={`/product/${1111}`} className='info__button'>
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
