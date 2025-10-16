import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section className="container-fluid mt-3 pt-4 pb-4" style={{backgroundColor:"#ececec"}}>
        <div className="row">
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="lineHighet">
              <li >support@suport.com</li>
              <li >Mon-Sun 8.00-15.00</li>
              <li>XXX 12345 XXXXX Street</li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="row lineHighet">
              <Link className="footerLink" to="#">
                Terms & Conditions
              </Link>
              <Link className="footerLink" to="#">
                Our credit slips
              </Link>
              <Link className="footerLink" to="#">
                Shipping&Refund
              </Link>
              <Link className="footerLink" to="#">
                Delivery Information
              </Link>
              <Link className="footerLink" to="#">
                Our personal info
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row lineHighet">
              <Link className="footerLink" to="#">
                Search
              </Link>
              <Link className="footerLink" to="#">
                About us
              </Link>
              <Link className="footerLink" to="#">
                Contact us
              </Link>
              <Link className="footerLink" to="#">
                Returns
              </Link>
              <Link className="footerLink" to="#">
                Shipping
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="p-2 m-2">
              <button type="button" className="socialIcon me-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Facebook">
                <i className="fa-brands fa-facebook-f p-2"></i>
                </button>
              <button className="socialIcon me-1"><i className="fa-brands fa-twitter p-2"  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Facebook"></i></button>
              <button className="socialIcon me-1"><i className="fa-brands fa-google-plus-g p-2"></i></button>
              <button className="socialIcon me-1"><i className="fa-brands fa-instagram p-2"></i></button>
              <button className="socialIcon me-1"><i className="fa-brands fa-linkedin-in p-2"></i></button>
            
            
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
