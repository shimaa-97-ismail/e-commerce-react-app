
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
   const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);
const goToDetails = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4" style={{ color: "#e6ae7d" }}>
         Products
      </h2>
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-3">
            <Card className="h-100 product-card"   
            onClick={() => goToDetails(product.id)}
              style={{ cursor: "pointer" }}>
             
              <Card.Img
                variant="top"
                src={product.image}
                className="product-image"
              />
              <Card.Body>
                <Card.Title className="product-title">
                  {product.title.length > 30
                    ? product.title.slice(0, 30) + "..."
                    : product.title}
                </Card.Title>
                <Card.Text className="product-description">
                  {product.description.length > 60
                    ? product.description.slice(0, 60) + "..."
                    : product.description}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="product-price">${product.price}</span>
                  <Button className="mainColorBtn" onClick={() => goToDetails(product.id)}>View</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
