import { PropTypes } from "prop-types";

export default function Page4(props) {
  return (
    <>
      <div className="page4" style={props.page4}>
        <div className="txt-div">
          <div className="maeque">
            <h1>
              WE ARE ZOA ENERGY DRINK WE SERVE A BRILLIANT DRINK WITH ZERO SUGAR
              AND NATURAL FLAVOURS
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

Page4.propTypes = {
  page4: PropTypes.object.isRequired, // Enforces page1 to be an object
};
