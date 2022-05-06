import React, { useState,useEffect } from 'react'
import './todo.css'
import axios from '../services/axios';
import { useNavigate } from 'react-router-dom';
import { Label,FormGroup,Form,Input, Button,Alert } from 'reactstrap'
export default function Todo() {
const [title, settitle] = useState("");
const [description,setdescription] = useState("");
const [date,setdate] = useState("");
const [flag, setFlag] = useState(false);
const navigate = useNavigate();

// useEffect(() => { 
//   axios.get(`todos/index`).then((Response)=>{
//     console.log(Response.data);
//     localStorage.getItem("token")
  
//   }).catch((err)=>{
//   console.log("Something is wrong");
//   }) 
//    },[]);

const handleLogin = (e) => {
e.preventDefault();
let item= {title,description,date}
console.log(item);


if (!title || !description || !date) {
  setFlag(true);

}else{
 
    axios.post("todos/create",item).then((data)=>{
   console.log(data);
   console.log("Todo Saved");
   setFlag(false);
   navigate('/admin/Bucket') 
  }).catch((err)=>{
      console.log(err);
    })
  }
};
  return (
    <div className="size shadow">
      <Form className="form" onSubmit={handleLogin}>
        <FormGroup>
          <Label htmlFor="exampleEmail">Title</Label>
          <Input
            type="text"
            name="title"
            value={title}
            placeholder="Write Your Activity"
            autoComplete="on"
            onChange={(event) => settitle(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="examplePassword">Description</Label>
          <Input
            type="text"
            name="Description"
            value={description}
            autoComplete="on"
            placeholder='Write a Description '
            onChange={(event) => setdescription(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="examplePassword">Date</Label>
          <Input
            type="date"
            name="Time"
            id="examplePassword"
            value={date}
            autoComplete="on"
            placeholder="********"
            onChange={(event) => setdate(event.target.value)}
          />
        </FormGroup>
    <Button  color="primary">Add</Button>
    </Form>
    {flag && (
            <Alert color="primary" variant="warning">
              Please fill the All Inputs
            </Alert>
          )}
   
    </div>
  );
}
