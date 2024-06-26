import { PropTypes } from "prop-types";

function Page6(props) {
  return (
    <>
      <div className="page6" style={props.page6}></div>
    </>
  );
}

Page6.propTypes = {
  page6: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Page6;
