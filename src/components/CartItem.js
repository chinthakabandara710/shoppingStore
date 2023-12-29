import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/shopSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const CartItem = () => {
  const productData = useSelector((state) => state.shop.productData);
  const dispatch = useDispatch();
  return (
    <div className="">
      <div>
        {productData.map((item) => (
          <div>
            <Container>
              <Row className="justify-content-center">
                <Col sm={1}>
                  {" "}
                  <MdOutlineClose
                    onClick={() =>
                      dispatch(deleteItem(item.id)) &
                      toast.error(`${item.title} is removed`)
                    }
                    className=""
                  />
                </Col>
                <Col sm={3}>
                  <img src={item.image} alt="" />
                </Col>
                <Col>
                  <Col className="justify-content-center" sm={6}>
                    <h6> {item.title}</h6>
                  </Col>
                  <Col className="justify-content-center" sm={6}>
                    {item.price}
                  </Col>
                  <Col className="justify-content-center" sm={6}>
                    <p className=" ">Quantity</p>

                    <div className="d-flex">
                      <div className="">
                        <Button
                          variant="dark"
                          onClick={() =>
                            dispatch(
                              decrementQuantity({
                                id: item.id,
                                title: item.title,
                                image: item.image,
                                price: item.price,
                                quantity: 1,
                                description: item.description,
                              })
                            )
                          }
                          className=""
                        >
                          -
                        </Button>
                        <span className="m-1"> {item.quantity}</span>

                        <Button
                          variant="dark"
                          onClick={() =>
                            dispatch(
                              incrementQuantity({
                                id: item.id,
                                title: item.title,
                                image: item.image,
                                price: item.price,
                                quantity: 1,
                                description: item.description,
                              })
                            )
                          }
                          className=""
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Col>
              </Row>
            </Container>
            <p></p>
            <p></p>
            <p></p>
          </div>
        ))}
      </div>
      <div className="">
        <Button
          className="mx-auto"
          variant="danger "
          onClick={() =>
            dispatch(resetCart()) & toast.error("Your cart is Empty !")
          }
        >
          Reset Cart
        </Button>
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

export default CartItem;
