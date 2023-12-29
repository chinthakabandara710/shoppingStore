import React, { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Blog() {
  const userInfo = useSelector((state) => state.shop.userInfo);
  const [postList, setPostsList] = useState([]);
  const [editable, setEditable] = useState(false);
  const [postId, setPostId] = useState();
  const [newPost, setNewPost] = useState({ title: "", post: "" });
  // const [newPostText, setNewPostText] = useState();
  const postsCollectionRef = collection(db, "posts");
  // const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const userId = userInfo ? userInfo._id : 0;

  const isAuth = true;

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(
        query(postsCollectionRef, orderBy("time", "desc"))
      );
      setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
    // console.log(auth.currentUser.uid);
  });
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  const updatePost = async (id, title, text) => {
    setEditable(true);
    setNewPost({ title: title, post: text });
    setPostId(id);
  };
  function handleChange(event) {
    const { value, name } = event.target;
    // let newVal = event.target.value;
    // let inputName = event.target.name;

    // inputName === "title" ? setNewPost(newVal) : setNewPost(newVal);

    setNewPost((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          post: prevValue.post,
        };
      } else if (name === "post") {
        return {
          title: prevValue.title,
          post: value,
        };
      }
    });
  }
  let navigate = useNavigate();

  function handleCreatePost() {
    if (userInfo) {
      navigate("/create");
    } else {
      toast.error("Please login to Create a post");
    }
  }

  return (
    <div className="blog">
      <div className="my-5 py-5 d-flex justify-content-around ">
        <h1>Blogs</h1>
        <Button variant="outline-success" onClick={handleCreatePost}>
          Create Post
        </Button>
      </div>

      {postList.map((post) => {
        return (
          <div className="my-5">
            <Container>
              <Row>
                <Col xs={12} md={12}>
                  <Card style={{ width: "100%" }}>
                    <div className="d-flex justify-content-between">
                      {isAuth && post.author.id === userId && (
                        <button
                          className="p-3"
                          onClick={() => {
                            deletePost(post.id);
                          }}
                        >
                          &#128465;
                        </button>
                      )}{" "}
                      {isAuth && post.author.id === userId && (
                        <button
                          className="p-3"
                          onClick={() => {
                            updatePost(post.id, post.title, post.postText);
                            // console.log(newPost.title);
                            // console.log(newPost.post);
                          }}
                        >
                          &#9998;
                        </button>
                      )}
                    </div>
                    <Card.Body>
                      {editable && post.id === postId ? (
                        <Form.Control
                          name="title"
                          placeholder="Title"
                          value={newPost.title}
                          onChange={handleChange}
                        />
                      ) : (
                        <Card.Title>{post.title}</Card.Title>
                      )}
                      {editable && post.id === postId ? (
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="post"
                          placeholder="Your post"
                          value={newPost.post}
                          onChange={handleChange}
                        />
                      ) : (
                        <Card.Text>{post.postText}</Card.Text>
                      )}
                    </Card.Body>
                    {editable && post.id === postId && (
                      <Button
                        className="mx-3 "
                        variant="outline-danger"
                        onClick={async () => {
                          let id = post.id;
                          const postDoc = doc(db, "posts", id);
                          const newFeild = {
                            title: newPost.title,
                            postText: newPost.post,
                          };
                          await updateDoc(postDoc, newFeild);
                          setEditable(false);
                          alert("Updated Successfully");
                          console.log(newPost.title);
                          console.log(newPost.post);
                        }}
                      >
                        Update
                      </Button>
                    )}
                    <Card.Body>
                      <Card.Link href="" style={{ textDecoration: "none" }}>
                        @ {post.author.name}
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        );
      })}
      <ToastContainer
        position="top-right"
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
}

export default Blog;
