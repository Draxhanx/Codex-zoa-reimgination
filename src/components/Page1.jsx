import { PropTypes } from "prop-types";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect } from "react";

export default function Page1(props) {

useGSAP(() => {
  gsap.from(" .h1, .h12", {
    y: -100,
    opacity:-1,
    duration: 0.8,
    stagger: 0.3,
  });

  gsap.from(".img", {
    y: 200,
    duration: 1,
    stagger: 0.5,
    delay: 0.1,
  });

  gsap.from(".thirdline", {
    y: 400,
    opacity:0,
    duration: 1,
    delay: 0,
  });

  gsap.from(".bottom-border", {
    y: 200,
    duration: 1,
    delay: 0.1,
    stagger: 0.2,
  });
});


// useEffect(()=>{

//   let h1 = document.querySelector(".h1")
// let arr = h1.innerText.split(" ")
// arr.forEach((itmes)=>{

//   const span = document.createElement("span");
//   span.innerText= itmes+ " ";
//   h1.ap
 
//   console.log(itmes);
// })
// // console.log(arr);
// })




  return (
    <>
      <div className="page1">
        <div className="lannding-page" style={props.page1}>
          <div className="heading">
            <div className="img">
              <img className="imgcane" src={props.can} alt="" />
            </div>
            <h1  className="h1">CALSSIC CRAFT DRINKS,</h1>
            <br />
            <h1 className="h12">ENERGY WITHOUT,</h1>
            <br />
            <div className="thirdline">
              <h1 style={{ color: `${props.theme}` }}>FUSS</h1>
            </div>
          </div>
          <div className="bottom-border">
            <h1>PURE, HONEST AND DAMN DELICIOUS</h1>
          </div>
          <div className="arrow">
            <div className="leftarrow">
              <img className="arrowimg" src="Images/Arrow2.png" alt="" />
              <p>
                ENJOY THE <br /> FLAVOUR
              </p>
            </div>
            <div className="rightarrow">
              <p>
                WITH ZERO <br /> SUGAR
              </p>
              <img className="arrowimg" src="Images/arrow.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Page1.propTypes = {
  page1: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
  can: PropTypes.string.isRequired, // Enforces page1 to be an object
  // Enforces page1 to be an object
};
