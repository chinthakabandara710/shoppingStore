import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import  { Button, Container, Form } from "react-bootstrap";

function CreatePost() {
  const isAuth = true;
  const [title, setTitle] = useState("");
  const [postText, setPost] = useState("");

  const postCollectionRef = collection(db, "posts");

  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      time: new Date(),
    });
    navigate("/blog");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  return (
    <div className="createPostPage mt-5 pt-5">
      <Container fluid>
        <h1>Create A Post</h1>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Post Title</Form.Label>
            <Form.Control
              required 
              type="email"
              placeholder="Title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
              <Form.Control.Feedback type="invalid">
        Please choose a username.
      </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Post</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(event) => {
                setPost(event.target.value);
              }}
            />
          </Form.Group>
        </Form>
        <Button variant="success" className="m-3" onClick={createPost}>
          Submit Post
        </Button>
      </Container>
    </div>
  );
}

export default CreatePost;
