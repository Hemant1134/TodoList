import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

export default class nav extends Component {

  constructor(props) {
    super(props);
        this.state = {
      Name: "Hemant Pal",

    };
  }
  Click = (e) => {
    e.preventDefault();

    this.setState({ Name: "Logo" });
  }




render() {
    const { Name } = this.state;
    return (
     <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light h-100">
    <div className="container-fluid">
     <a className="navbar-brand" href="!#" onClick={this.Click}>{Name}</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
    <div className="collapse navbar-collapse " id="navbarNav">
       <ul className="navbar-nav ">
         <li className="nav-item">
           <Link className="nav-link" to="/">About</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/form">Sign Up</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/port">Portfolio</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/step">Step_Form</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/input">Input Field</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/Count">Counting</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/Boot">Form</Link>
         </li>
       </ul>
     </div>
   </div>
     </nav>
</div>
)
  }
}
