import "./Navbar.css"

const Navbar = () => {
  return(
       <div className="navbar"> 
       <div className="navContainer">
           <span className="logo">DeoBooking</span>
           <div className="navitems">
              <button className="navButton">Register</button>
              <button className="navButton">Login</button>
           </div>
            </div>
       </div>
       
  )
};

export default Navbar;
