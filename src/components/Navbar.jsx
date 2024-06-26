import { PropTypes } from "prop-types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar(props) {

  useGSAP(()=>{
    gsap.from(".link , .logo , .btn , .cart ,.hamburger" , {
      y: -100,
      duration: 1,
      stagger:0.1
    })
  })
  
  return (
    <>
      <div className="navbar">
        <div className="navbar-con">
          <div className="left-navbar">
            <div className="link">
              <a href="#">HOME</a>
            </div>
            {/* <!-- <div className="network">
                        <a href="#"><i className="ri-instagram-line"></i></a>
                        <a href="#"><i className="ri-linkedin-line"></i></a>
                        <a href="#"><i className="ri-facebook-line"></i></a>
                    </div> --> */}
          </div>
          <div className="logo">
            <img src="Images/logo5.png" alt="" />
          </div>
          <div className="right-navbar">
            <div className="btn">
              <a href="#" style={{ backgroundColor: `${props.theme}` }}>
                ORDER NOW <i className="ri-arrow-right-fill"></i>
              </a>
            </div>
            <div className="cart">
              <i className="ri-shopping-cart-2-fill"></i>
            </div>
            <div className="hamburger">
              <p>MENU</p>
              <i className="ri-menu-fill"></i>
            </div>
            {/* <!-- <div className="english">
                        <p>EN</p>
                    </div> --> */}
          </div>
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  theme: PropTypes.string.isRequired, // Enforces page1 to be an object
};
