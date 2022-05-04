
import React, { useState } from "react";
import '../App.css'
import {Input,Button,FormGroup,Label,Form,Alert} from "reactstrap"
import Home from "./Home";

function Login() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

 async function handleLogin(e) {

    e.preventDefault();
    let item= {email,password}
    console.log(item);
  let result = await fetch("http://localhost:4000/users/login",{
     method:"POST",
     headers:{
       "Content-Type":"application/json",
       "Accept":"application/json"
     },
     body:JSON.stringify(item)
   });

  result=await result.json()
     console.log(result)

   let mail = localStorage.getItem("Email").replace(/"/g, "");
   let pass = localStorage.getItem("Password").replace(/"/g, "");
    
    

    if (!email || !password) {
      setFlag(true);
      console.log("EMPTY");

    } else if (password !== pass || email !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
   <>
      {home ? (
        <div className="size">
        <Form className="form" onSubmit={handleLogin}>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            value={email}
            placeholder="example@example.com"
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
            placeholder="********"
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>
      <Button>Login</Button>

      {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
    </Form>
    </div>
      ) : (
        <Home/>
      )}
 </> 
  );
}

export default Login;