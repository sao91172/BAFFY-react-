import React, {useState} from 'react';
import MainNav from '../Nav Bar/MainNav'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from "axios";

export default function LoginForm() {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
 
    function validateForm() {
 
      return email.length > 0 && password.length > 0;
 
    }
 
    function handleSubmit(event) {

      event.preventDefault();
      const addUsers = {
        email:email,
        password:password
      }
      
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      
      
      axios.post('http://localhost:4000/make', addUsers);
      console.log("Saved in local Storage");
 
    }
 
    return (
 
      <div className="Login">
         <MainNav/>

        <Form onSubmit={handleSubmit}>
 
          <Form.Group size="lg" controlId="email">
 
            <Form.Label>Email</Form.Label>
 
            <Form.Control
 
              autoFocus
 
              type="email"
 
              value={email}
 
              onChange={(e) => setEmail(e.target.value)}
 
            />
 
          </Form.Group>
 
          <Form.Group size="lg" controlId="password">
 
            <Form.Label>Password</Form.Label>
 
            <Form.Control
 
              type="password"
 
              value={password}
 
              onChange={(e) => setPassword(e.target.value)}
 
            />
 
          </Form.Group>
 
          <Button block size="lg" type="submit" disabled={!validateForm()}>
 
            Login
 
          </Button>
 
        </Form>

        <br></br>
        <Form onSubmit={handleSubmit}>
 
 <Form.Group size="lg" controlId="email">

   <Form.Label>Email</Form.Label>

   <Form.Control

     autoFocus

     type="email"

     value={email}

     onChange={(e) => setEmail(e.target.value)}

   />

 </Form.Group>

 <Form.Group size="lg" controlId="password">

   <Form.Label>Password</Form.Label>

   <Form.Control

     type="password"

     value={password}

     onChange={(e) => setPassword(e.target.value)}

   />

 </Form.Group>

 <Button block size="lg" type="submit" disabled={!validateForm()}>

   Sign Up

 </Button>

</Form>
 
      </div>
      
 
    );
 
 
}