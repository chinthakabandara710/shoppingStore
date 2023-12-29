import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/shopSlice";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "react-bootstrap";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = product.title;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };

  const rootId = idString(id);
  console.log(rootId);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="productList shadow-2-strong">
      <div onClick={handleDetails}>
        <img className="productImage" src={product.image} alt="productImage" />
      </div>
      <div>
        <div>
          <div className=" ">
            <h2>{product.title.substring(0, 15)}</h2>
            <p>Category : {product.category}</p>
          </div>
          <div className="me-auto d-flex justify-content-between">
            <div>
              <p className="newPrice">${product.oldPrice}</p>
              <p className="oldPrice">${product.price}</p>
            </div>
            <Button
              variant="dark"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.title} is added`)
              }
            >
              Add to cart{" "}
            </Button>
          </div>
        </div>
        <div>{product.isNew && <p className="sale">Sale</p>}</div>
      </div>
      <ToastContainer
        position="top-right"
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

export default ProductsCard;
