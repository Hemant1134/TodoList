import React,{useEffect, useState} from 'react'
import axios from '../services/axios';
import { Table } from 'reactstrap';
export default function Bucket() {
  const [user, setUser] = useState([]);
  const [title, settitle] = useState("");
  const [description,setdescription] = useState("");
  const [date,setdate] = useState("");
useEffect(() =>{
      const get=async ()=>{
          const {data:res}=await axios.get(`todos/index`);
          console.log(res);
          localStorage.getItem("token");
        //   console.log(res.todos);
          setUser(res.todos);
      }
          get();  
      },[]);
      
 const handleDelete=(e,id)=>{
     e.preventDefault(); 
     axios.delete(`todo/delete/${id}`).then((Response) => {
      console.log(Response.data)
      localStorage.getItem("token");
      
      // const del = user.filter((todo) => id !== todo.id);
      //  setUser(del);
 
      //  console.log(response.todos);      
   }).catch((err)=>{
       console.log(err);
   })
// setUser(user.filter((p)=> p.id !== id));
}

// function selectUser(id){
//   let item=user[id-1];
//   settitle(item.title)
//   setdescription(item.description)
//   setdate(item.date)
// }
// function updateUser(){

// }


      return (
      <>
 <Table bordered={true}>
   <tbody>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {

             user.map((item, i) => 
                    <tr key={i}>
                        <td>{item.id}</td> 
                        <td>{item.title}</td> 
                      <td>{item.description}</td>
                        <td>{item.date}</td>
                        <td><button className=' btn btn-primary'>Update</button></td>
                       <td><button onClick={(e)=>handleDelete(e,item.id)} className='btn btn-danger'>Delete</button></td>
                    </tr> 
     )} 
         </tbody> 

   </Table> 
</>

)
}
