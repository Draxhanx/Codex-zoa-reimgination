import { PropTypes } from "prop-types";

export default function Page1(props) {
  return (
    <>
      <div className="page1">
        <div className="lannding-page" style={props.page1}>
          <div className="heading">
            <div className="img">
              <img src="Images/cherry.png" alt="" />
            </div>
            <h1>CALSSIC CRAFT DRINKS,</h1>
            <br />
            <h1>ENERGY WITHOUT,</h1>
            <br />
            <div className="thirdline">
              <h1>FUSS</h1>
            </div>
          </div>
          <div className="bottom-border">
            <h1>PURE, HONEST AND DAMN DELICIOUS</h1>
          </div>
          <div className="arrow">
            <div className="leftarrow">
              {/* <!-- <img src="Images/Arrow2.png" alt=""> --> */}
              <p>
                ENJOY THE <br /> FLAVOUR
              </p>
            </div>
            <div className="rightarrow">
              <p>
                WITH ZERO <br /> SUGAR
              </p>
              {/* <!-- <img src="Images/arrow.png" alt=""> --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Page1.propTypes = {
  page1: PropTypes.object.isRequired, // Enforces page1 to be an object
};
