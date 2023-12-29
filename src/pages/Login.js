import React from "react";
import { gitHubLogo, googleLogo } from "../assets";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/shopSlice";
import { Button, Table } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          localStorage.setItem("isAuth", true);
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleGoogleSignOut = () => {
    setShow(false);
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        toast.success("Log Out successfully !");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="m-5">
      <h1 className="p-5 mt-5">Choose your account</h1>
      <div className="m-5 px-auto">
        <Table className="d-flex justify-content-around  " responsive>
          <tbody>
            <tr>
              <td>
                <Button variant="outline-dark" onClick={handleGoogleSignIn}>
                  <img
                    className="mx-auto loginLogos"
                    src={googleLogo}
                    alt="googleImg"
                  />
                  <span>Sign in with Google</span>
                </Button>
              </td>
              <td>
                <Button variant="dark" onClick={handleShow}>
                  Sign Out
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Body>
                    Do you want to sign out from your account ?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      No
                    </Button>
                    <Button variant="primary" onClick={handleGoogleSignOut}>
                      Yes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>{" "}
            <tr>
              <td>
                <Button variant="outline-dark">
                  <img
                    className="mx-auto loginLogos"
                    src={gitHubLogo}
                    alt="googleImg"
                  />
                  <span>Sign in with GitHub</span>
                </Button>
              </td>
              <td>
                <Button variant="dark" onClick={handleGoogleSignOut}>
                  Sign Out
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={2000}
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

export default Login;
