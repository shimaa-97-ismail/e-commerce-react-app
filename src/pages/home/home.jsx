// import { useEffect, useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import { Link } from "react-router-dom";
// import "./home.css"
// const Home = () => {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <>
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://cdn.shopify.com/s/files/1/1691/0147/t/3/assets/slider_1_1.jpg?v=42429877333736094631483514780"
//             alt="First slide"
//           />
//           <Carousel.Caption className="mb-5">
//             <div
//               style={{
//                 color: "#e6ae7d",
//                 border: "solid 6px #e6ae7d",
//                 width: "60%",
//               }}
//             >
//               <h1>NEW JEWELRY COLLECTION</h1>
//             </div>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://cdn.shopify.com/s/files/1/1691/0147/t/3/assets/slider_1_2.jpg?v=75183339735994298131483514780"
//             alt="Second slide"
//           />

//           <Carousel.Caption className="mb-5">
//             <div
//               style={{
//                 color: "#e6ae7d",
//                 border: "solid 6px #e6ae7d",
//                 width: "60%",
//               }}
//             >
//               <h1>NEW JEWELRY COLLECTION</h1>
//             </div>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       <section className="container-fluid">
//         <div className="row pt-2" style={{ backgroundColor: "#ececec" }}>
//           <div className="col-2 d-flex justify-content-end">
//             {" "}
//             <h6 className="p-2">SEARCH NOW</h6>
//           </div>
//           <div className="col-10">
//             <div class="input-group input-group-sm w-50">
//               <input type="text" class="form-control" />
//               <button class="input-group-text" type="submit">
//                 <i class="fa-solid fa-magnifying-glass"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="container-fluid row">
//         <div className="col-4">
//           <div class="card" style={{width:"60%"}}>
//             <div class="card-header mainColor">
//               <h4>COLLECTIONS</h4>
//               </div>
//             <div class="card-body">
//               <p class="card-text row">
//                 <Link className="collectionLink"  to="">Hant Free demo collection 1</Link>
//                 <Link className="collectionLink"  >Hant Free demo collection 2</Link>
//                 <Link className="collectionLink"  >Hant Free demo collection 3</Link>
//                 <Link className="collectionLink"  >Hant Free demo collection 4</Link>
//                 <Link className="collectionLink"  >Hant Free demo collection 5</Link>
//                 <Link className="collectionLink"  >Hant Free demo collection 6</Link>
//               </p>
            
//             </div>
//           </div>
//         </div>

//         <div className="col-8"></div>
//       </section>
//     </>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Fetch fake products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        setProducts(data)})
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* Hero Carousel */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/1691/0147/t/3/assets/slider_1_1.jpg?v=42429877333736094631483514780"
            alt="First slide"
          />
          <Carousel.Caption className="mb-5">
            <div className="carousel-caption-box">
              <h1>NEW COLLECTION</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/1691/0147/t/3/assets/slider_1_2.jpg?v=75183339735994298131483514780"
            alt="Second slide"
          />
          <Carousel.Caption className="mb-5">
            <div className="carousel-caption-box">
              <h1>NEW JEWELRY COLLECTION</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Search Section */}
      <section className="container-fluid">
        <div className="row pt-2 search-section">
          <div className="col-2 d-flex justify-content-end">
            <h6 className="p-2">SEARCH NOW</h6>
          </div>
          <div className="col-10">
            <div className="input-group input-group-sm w-50">
              <input type="text" className="form-control" placeholder="Search products..." />
              <button className="input-group-text" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections & Products */}
      <section className="container-fluid row mt-4">
        {/* Collections */}
        <div className="col-4">
          <div className="card" style={{ width: "60%" }}>
            <div className="card-header mainColor">
              <h4>COLLECTIONS</h4>
            </div>
            <div className="card-body">
              <p className="card-text row">
                <Link className="collectionLink" to="">
                  Hand Free demo collection 1
                </Link>
                <Link className="collectionLink" to="">
                  Hand Free demo collection 2
                </Link>
                <Link className="collectionLink" to="">
                  Hand Free demo collection 3
                </Link>
                <Link className="collectionLink" to="">
                  Hand Free demo collection 4
                </Link>
                <Link className="collectionLink" to="">
                  Hand Free demo collection 5
                </Link>
                <Link className="collectionLink" to="">
                  Hand Free demo collection 6
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Products Slider */}
        <div className="col-8">
          <h4 style={{ color: "#e6ae7d", marginBottom: "15px" }}>Featured Products</h4>
          <div className="d-flex overflow-auto product-slider">
            {products.map((product) => (
              <div key={product.id} className="card product-card me-3">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h6 className="card-title">{product.title.slice(0, 30)}...</h6>
                  <p className="card-text">${product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn mainColorBtn">
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
