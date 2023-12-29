import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/shopSlice";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const Product = () => {
  const dispatch = useDispatch();
  let [baseQty, setBaseQty] = useState(1);
  const [details, setDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
    console.log(location.state.item);
  }, [location.state.item]);

  return (
    <div>
      <Container className="p-5">
        <Row className="m-5">
          <Col xs={12} md={6} lg={6}>
            <img src={details.image} alt="productImg" />
            <div className="">
              {details.isNew && (
                <p className=" bg-black text-white p-2 ">Sale</p>
              )}
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="productDetails">
              <div>
                <h2>{details.title}</h2>
                <div>
                  <p className="oldPrice">${details.oldPrice}</p>
                  <p className="newPrice">${details.price}</p>
                </div>
              </div>
              <div className="ml-5">
                <div className="d-flex justify-content-center ">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </div>
                <p className="">(1 customer review)</p>
              </div>
              <p>{details.description}</p>
              <div className="">
                <div className="shadow p-3 mb-5 bg-white rounded">
                  <p className=" text-sm">Quantity</p>
                  <div className=" flex items-center gap-4 text-sm font-semibold">
                    <Button
                      variant="dark"
                      onClick={() =>
                        setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                      }
                      className="border h-5 hover:bg-gray-700 hover:text-white active:bg-black cursor-pointer flex items-center justify-center px-2 text-lg"
                    >
                      -
                    </Button>
                    <span>{baseQty}</span>
                    <Button
                      variant="dark"
                      onClick={() => setBaseQty(baseQty + 1)}
                      className="border h-5 hover:bg-gray-700 hover:text-white active:bg-black cursor-pointer flex items-center justify-center px-2 text-lg"
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div>
                  <Button
                    style={{ width: "100%" }}
                    variant="outline-secondary"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          _id: details._id,
                          title: details.title,
                          image: details.image,
                          price: details.price,
                          quantity: baseQty,
                          description: details.description,
                        })
                      ) & toast.success(`${details.title} is added`)
                    }
                    className=""
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
              <p className="text-base text-gray-500">
                Category : <span>{details.category}</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer
        position="top-left"
        autoClose={5000}
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

export default Product;
