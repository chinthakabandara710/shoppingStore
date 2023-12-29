import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

const Cart = () => {
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);
  const [totalAmt, setTotalAmt] = useState();
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please log in to checkout");
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token,
    });
  };

  return (
    <div className="m-5  p-5">
      {/* <img
        className="w-full h-60 object-cover "
        src="https://i.pngimg.me/thumb/f/720/0daa94dcf2494fc4a5e6.jpg"
        alt="cartBanner"
      /> */}
      <div>
        <div className="m-5">
          <h2 className="">Shopping cart</h2>
        </div>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <CartItem />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className="w-1/3 py-6 px-4 bg-[#fafafa]">
                <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-600 pb-6">
                  <h2 className="text-2xl font-medium">Cart totals</h2>
                
                  <p className=" flex items-start gap-4 text-base">
                    Shipping : 
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                  </p>
                </div>
                <p className=" font-titleFont font-semibold flex justify-between mt-6">
                  Total <span className="text-xl font-bold">$ {totalAmt}</span>
                </p>
                <button
                  onClick={handleCheckout}
                  className=" w-full p-3 mt-3  bg-black active:bg-gray-400 text-white duration-500"
                >
                  Proceed to Checkout
                </button>

                {payNow && (
                  <div className="flex justify-center pt-3">
                    <StripeCheckout
                      stripeKey="pk_test_51OP78SBYHyvjtlJ8j9Y3fSAcFI2NWHMoHRMWOfpP4JKBB9XQU1xlN3atXfenXclTQWLcz86ssY1qzZabNrsd4nl500zjGA2OF1"
                      name="Shop shopping"
                      description={`Your payment amount is $${totalAmt}`}
                      amount={totalAmt * 100}
                      email={userInfo.email}
                      token={payment}
                      label="Pay to shop"
                    />
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
