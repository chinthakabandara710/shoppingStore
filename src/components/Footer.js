import React from "react";
import { logo, paymentsLogo } from "../assets";
import { FaGithub } from "react-icons/fa";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaHome,
} from "react-icons/fa";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
import { Form } from "react-bootstrap";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <Row className="">
        <Col className="mt-5" xs={12} md={4} lg={3}>
          <div className="">
            <img className="logo" src={logo} alt="Your Company" />

            <img className="" src={paymentsLogo} alt="paymentsLogo" />
            <div className=" d-flex justify-content-center">
              <a href="/" className=" smIcons">
                <FaGithub />
              </a>
              <a href="/" className=" smIcons">
                <FaFacebook />
              </a>
              <a href="/" className=" smIcons">
                <FaYoutube />
              </a>
              <a href="/" className=" smIcons">
                <FaTwitter />
              </a>
              <a href="/" className=" smIcons">
                <FaInstagram />
              </a>
              <a href="/" className=" smIcons">
                <FaHome />
              </a>
            </div>
          </div>
        </Col>
        <Col className="mt-5" xs={12} md={4} lg={3}>
          <div>
            <h2 className="footerHeadings mb-4">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </Col>
        <Col className="mt-5" xs={12} md={4} lg={3}>
          <h2 className="footerHeadings d-flex justify-content-center mb-4">
            Contact Us
          </h2>
          <div className="">
            <p className="d-flex justify-content-start">
              <span>
                <CiMail className="mx-4" />
              </span>
              template@info.com
            </p>

            <p className="d-flex justify-content-start">
              <span>
                <FaHome className="mx-4" />
              </span>
              701 Colombo ,SL
            </p>
            <p className="d-flex justify-content-start">
              <span>
                <FaPhone className="mx-4" />
              </span>
              +94XXXXXXXX
            </p>
          </div>
        </Col>
        <Col className="mt-5" xs={12} md={12} lg={3}>
          <div className=" flex flex-col  m-5 justify-center">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Subscribe to get the lateast offers</Form.Label>
                <Form.Control type="email" placeholder="Enter your Email" />
              </Form.Group>
            </Form>
            <Button variant="outline-success">Subscribe</Button>
          </div>
        </Col>
        <small class="website-rights">All Right Recerved &copy; {year}</small>
      </Row>
    </div>
  );
};

export default Footer;
