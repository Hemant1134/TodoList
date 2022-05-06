import React, { Suspense } from 'react';
import './App.css';
import Registration from './Components/Registeration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login'
import DefaultLayout from './Container/defaultLayout';
import Dashboard from './Components/Dashboard';
import Todo from './Components/Todo';
import Bucket from './Components/Bucket';
import {authCheck} from './Components/PrivateRoute';
import NotFound from './Components/404'
const Layout =authCheck(DefaultLayout)

const LoginHoc=authCheck(Login);
const Register= authCheck(Registration);
function App() {

  
  return (
    <div className='App'>
    
      <Router>
      {/* <Suspense fallback={<div>Loading................</div>} > */}
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<LoginHoc />} />
          <Route path='*' element={<NotFound/>}></Route> 
          <Route path='/admin' element={<Layout/>} >

            <Route index  element={<Dashboard />}></Route>

             <Route path='todo' element={<Todo />}></Route>

            <Route path='Bucket' element={<Bucket />}></Route>
          
          </Route>
           
        </Routes>
        {/* </Suspense> */}
      </Router>
       </div>
  );
}

export default App;