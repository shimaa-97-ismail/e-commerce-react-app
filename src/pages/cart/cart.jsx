import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0)
    return (
      <div className="container mt-4">
        <h2>Your Cart is Empty</h2>
        <Link to="/products">Go to Products</Link>
      </div>
    );

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-danger btn-sm"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total: ${total.toFixed(2)}</h4>
      <button onClick={clearCart} className="btn btn-warning">
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
