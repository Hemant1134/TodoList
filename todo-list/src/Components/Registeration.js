import React, { useState } from "react";
import {Form,Label,Button,Alert,FormGroup,Input} from 'reactstrap'
import axios from "../services/axios";
import {useNavigate} from 'react-router-dom'
import Login from "./Login";
import '../App.css'
function Registration() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
 
const navigate=useNavigate();
async function handleFormSubmit(e) {

  e.preventDefault();
    let item= {first_name,last_name,email,password,contact}
        console.log(item);
   

   
   
   
    if (!first_name || !last_name || !email || !password || !contact) {
      setFlag(true);
    
    } else {
      let result = await axios.post("users/register",item).then((data)=>{
        setFlag(false);
    
        localStorage.setItem("Email", JSON.stringify(email));
        
        localStorage.setItem("Password",JSON.stringify(password));
        
        console.log("Saved in Local Storage");
        navigate('/login') 
      })  

      


    }
  }

  function handleClick() {
    navigate('/login')
  }

 
  

  return (
    <>
           
            <div className="size">
            <Form onSubmit={handleFormSubmit}>
              <h3>Register</h3>

              <FormGroup>
                <Label>First Name</Label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="first_name"
                  value={first_name}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="last_name"
                  value={last_name}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label>Phone No.</Label>
                <Input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  name="contact"
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                />
              </FormGroup>
              <Button type="submit" >
                Register
              </Button>
              <p onClick={handleClick} className="forgot-password text-right">
                Already registered log in?
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                 Please fill REgistration Form
                </Alert>
              )}
            </Form>
            </div>
         

    
    
 </> );
}

export default Registration;