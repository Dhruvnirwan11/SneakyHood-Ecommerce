import "./Navbar.css";
import { useState ,useContext} from "react";
import { CartContext } from "../Context/CartContex";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const {cart} = useContext(CartContext)
    const navigate=useNavigate()
    return(
        <>
          
               <nav className="navbar">

      {/* Left */}
      <div className="logo">
        <h2>
          Sneaky<span>Hood</span>
        </h2>
      </div>

      {/* Center */}
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/collections">Collections</a>
        </li>

        <li>
          <a href="/men">Men</a>
        </li>

        <li>
          <a href="/women">Women</a>
        </li>

        <li>
          <a href="/about">About Us</a>
        </li>
      </ul>

      {/* Right */}
      <div className="nav-actions">

        <button className="icon-btn">
          <Search />
        </button>

        <button className="icon-btn">
          <Heart />
          <span className="badge">2</span>
        </button>

        <button className="icon-btn" onClick={()=>navigate("/cart")}>
        <ShoppingCart/>
          <span className="badge" >{cart.length}</span>
        </button>

        <button className="login-btn">
          Login / Sign Up
        </button>

      </div>
       {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
        >
         <Menu size={28} />
        </button>
     

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
        <X size={28} />
        </button>

        <a href="/">Home</a>
        <a href="/">Collections</a>
        <a href="/">Men</a>
        <a href="/">Women</a>
        <a href="/">About Us</a>
            <div className="mobile-icons">
              <button><Search /></button>
              <button> <Heart /></button> 
               <button> <ShoppingCart /></button>
            
          </div>

        <button className=" mobile-login">
          Login / Sign Up
        </button>
      </div>

    </nav>
        </>
    );
}
export default Navbar;