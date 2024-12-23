
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import './styles/CartList.scss';

const CartList = () => {
  const dispatch = useDispatch();
  const { products, totalAmount } = useSelector((state: RootState) => state.cart);

  return (
    <div className="cart-list">
      <h2>Your Shopping Cart</h2>
      {products.map(product => (
        <div className="cart-item" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <input
              type="number"
              value={product.quantity}
              onChange={e =>
                dispatch(updateQuantity({ id: product.id, quantity: +e.target.value }))
              }
            />
            <button onClick={() => dispatch(removeFromCart(product.id))}>Remove</button>
          </div>
        </div>
      ))}
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default CartList;
