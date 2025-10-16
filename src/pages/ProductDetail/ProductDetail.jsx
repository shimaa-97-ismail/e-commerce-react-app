import { useEffect, useState ,useContext} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../context/cartContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  console.log(id);

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);

        setProduct(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container product-detail-container mt-4">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="product-detail-image"
          />
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h2 className="product-detail-title">{product.title}</h2>
          <p className="product-detail-price">${product.price}</p>
          <p className="product-detail-description">{product.description}</p>

          <div className="d-flex align-items-center mt-3">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              style={{ width: "60px", padding: "5px" }}
              className="quantity-input"
            />
            <button
              className="btn add-to-cart-btn ms-3"
              onClick={() => addToCart(product, quantity)}
            >
              Add to Cart
            </button>
          </div>

          <Link to="/products" className="btn back-btn mt-3">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
