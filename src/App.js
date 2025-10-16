import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import Header from "./components/layout/header/header";
import Home from "./pages/home/home";
import AboutUs from "./pages/about-us/about-us";
import ContactUs from "./pages/contact-us/contact-us";
import Register from "./pages/registration/register";
import Loginwithracthookform from "./pages/login/login";
import ResetPassword from "./pages/resetPassword/resetPassword";
import Footer from "./components/layout/footer/footer";
import Products from "./pages/products/products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Regisration from "./pages/registration";
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/cart/cart';


function App() {
  return (

       <Router>
      <Header />
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resetPassword" element={<ResetPassword/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart />} /> 
 <Route path="/login" element={<Loginwithracthookform />} /> 
        
         </Routes>
        <Footer/> 
      </Router>
 
  );
}
  // {/* <Register /> */}
  //     {/* <Login/> */}
  //     {/* <ResetPassword/> */}
export default App;
