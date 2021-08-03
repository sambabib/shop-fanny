import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductSize from '../../components/ProductSize/ProductSize';
import './ProductScreen.css';

// @actions
import { getProductDetails } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions';

const ProductScreen = (match, history) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { error, loading, product } = productDetails;

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));

      console.log(id);
    }
  }, [product, id, dispatch]);

  return (
    <div className='productscreen'>
      <div className='productscreen__left'>
        <div className='productscreen-left__title'>
          <h2>Product Description</h2>
        </div>
        <div className='productscreen-left__description'>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            obcaecati ab nobis consequatur! Ipsam hic enim autem nulla
            voluptatem blanditiis odit, quas maxime quo! Blanditiis quia
            sapiente molestiae nesciunt? Cum.
          </h2>
        </div>
      </div>

      <div className='productscreen__center'>
        <div className='productscreen-center__image'>
          <img
            src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            alt='product 1'
          />
        </div>
      </div>

      <div className='productscreen__right'>
        <h2 className='productscreen-right__title'>PlayStation 5</h2>
        <div className='productscreen-right__price'>$499.99</div>
        <div className='productscreen-right__size'>
          <ProductSize />
        </div>
        <div className='productscreen-right__info'>
          <p className='productscreen-right__status'>
            Status: <span>In stock</span>
          </p>
          <p className='productscreen-right__qty'>
            Qty:
            <select>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </p>
          <p>
            <button type='button'>Add to cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
