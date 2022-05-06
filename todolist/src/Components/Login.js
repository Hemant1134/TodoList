import React, { useState, useEffect } from "react";
import '../App.css'
import { useNavigate, useParams } from "react-router-dom";
import { Input, Button, FormGroup, Label, Form, Alert } from "reactstrap"
import axios from "../services/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);

  const navigate = useNavigate();
  function handleLogin(e) {

    e.preventDefault();
    let item = { email, password }
    console.log(item);

    if (!email || !password) {
      setFlag(true);

    } else {
      axios.post("users/login", {
        email: email,
        password: password
      }).then((Response) => {
        // console.log(Response);
        // console.log(Response.data.token);
        localStorage.setItem("token", Response.data.token)
        Response.data.token ? navigate('/admin') : navigate('/');
        setFlag(false);
      })
    }



  }

  function handleClick() {
    navigate('/')
  }

  return (
      <div className="size shadow">
        <Form className="form" onSubmit={handleLogin}>
          <FormGroup className="colo">
            <Label for="exampleEmail">Email Id</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              value={email}
              placeholder="example@example.com"
              autoComplete="on"
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              value={password}
              placeholder="****************"
              autoComplete="on"
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormGroup>
          <p onClick={handleClick} className="forgot-password text-right login">
            Create Account ?

          </p>

          <Button color="primary">Login</Button>
         
         </Form>
         {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
      </div>
  );
}

export default Login;