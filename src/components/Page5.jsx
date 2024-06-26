import { PropTypes } from "prop-types";
function Page5(props) {
  return (
    <>
      <div className="page5" style={props.page5}>
        <div className="page5-haeding">
          <h1>
            Follow <span style={{ color: `${props.theme}` }}>ZOA</span> on{" "}
            <span style={{ color: `${props.theme}` }}>INSTAGRAM</span> to stay
            updated.
          </h1>
          <h1>You will get rally good stuff in your feed.</h1>
        </div>
        <div className="insta-feed">
          <div className="first-row">
            <img src="Images/insta1.png" alt="" />
          </div>
          <div className="second-row">
            <img src="Images/insta2.jpg" alt="" />
          </div>
          <div className="third-main">
            <div className="third-row">
              <img src="Images/insta3.png" alt="" />
            </div>
            <div className="fourth-row">
              <img src="Images/insta4.png" alt="" />
            </div>
          </div>
          <div className="fifth-row">
            <img src="Images/intsa5.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

Page5.propTypes = {
  page5: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Page5;
