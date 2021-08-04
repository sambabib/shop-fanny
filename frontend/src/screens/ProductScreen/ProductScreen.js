import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import ProductSize from '../../components/ProductSize/ProductSize';
import './ProductScreen.css';

// @actions
import { getProductDetails } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions';

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { error, loading, product } = productDetails;

  const handleAddToCart = () => {
    dispatch(addToCart(product._id, qty));
    history.push('/cart');
  };

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [product, id, dispatch]);

  return (
    <div className='productscreen'>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className='productscreen__left'>
            <div className='productscreen-left__title'>
              <h2>Product Description</h2>
            </div>
            <div className='productscreen-left__description'>
              <h2>{product.description}</h2>
            </div>
          </div>

          <div className='productscreen__center'>
            <div className='productscreen-center__image'>
              <img src={product.imageUrl} alt={product.name} />
            </div>
          </div>

          <div className='productscreen__right'>
            <h2 className='productscreen-right__title'>{product.name}</h2>
            <div className='productscreen-right__price'>${product.price}</div>
            <div className='productscreen-right__size'>
              <ProductSize />
            </div>
            <div className='productscreen-right__info'>
              <p className='productscreen-right__status'>
                Status:{' '}
                <span>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </p>
              <p className='productscreen-right__qty'>
                Qty:
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type='button' onClick={handleAddToCart}>
                  Add to cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
