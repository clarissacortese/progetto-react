import {Link} from "react-router-dom";
import img from "../../imgs/flow_logo.png";
import imgDark from "../../imgs/flow_logo_dark.png"
import "./navbar.css"
import Toggle from "../toggle/toggle";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-xl">
      <Link className="navbar-brand" to="/">
        <img src={img} className="imgLight" alt="logo"/>
        <img src={imgDark} className="imgDark" alt="logo"/>
      </Link>
      <div className="d-flex justify-content-end">
      <div className="collapse navbar-collapse navbar-nav" id="navbarsExample07XL">
          <Link to="/contact_us" className="menu"><h6 className="nav-item">CONTACT US</h6></Link>
          <h6 className="nav-item">LIGHT MODE:</h6>
          <Toggle className="nav-item"/>
      </div>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  )
}