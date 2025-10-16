import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const ContactUs = () => {
  return (
    <>
      <section className="container mt-3">
        <h1 className="text-center">CONTACT US</h1>
        <h4 className="mt-4">Why choose ThemTidy</h4>
        <p>
          We just don't build your website we build your business. We Building
          Your Business with Strong Branding. Our helpful support team is always
          on standby to help you with any questions or issues. We have a great
          team to build your business.
        </p>

        <div className="col-md-6 mt-5 pt-5">
          <Form className=" p-4 ">
            <Form.Group className="mb-3">
              <Form.Control type="text" name="name" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" name="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Your Massage"
              style={{ height: "100px" }}
            />

            <Button
              type="submit"
              id="mainBtn"
              className="btn text-light mt-3"
              size="lg"
            >
              SUBMIT MASSAGE
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
