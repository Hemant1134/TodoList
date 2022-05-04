import React from 'react';
import './App.css';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registeration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login'
import DefaultLayout from './Container/defaultLayout';
import Dashboard from './Components/Dashboard';
import Todo from './Components/Todo';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/admin' element={<DefaultLayout/>} >
            <Route index element={<Dashboard/>}></Route>
            <Route path='todo' element={<Todo/>}></Route>
          </Route>
        
        </Routes>

      </Router>
    </div>
  );
}

export default App;