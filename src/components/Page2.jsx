import { PropTypes } from "prop-types";
import { useState } from "react";

export default function Page2(props) {
  const [value, setValue] = useState(1);
  const canFirstNames = ["SUPER", "STRAWBERRY", "FROZEN", "WILD", "PINEAPLLE"];
  const canSecondNames = ["BERRY", "WATERMELON", "GRAPE", "ORANGE", "COCONUT"];

  const [firstName, setFirstName] = useState(canFirstNames[props.number]);
  const [secondName, setSecondName] = useState(canSecondNames[props.number]);

  function changeNextCan() {
    if (value >= 5) {
      let temp = 1;
      setValue(temp);
      setFirstName(canFirstNames[temp - 1]);
      setSecondName(canSecondNames[temp - 1]);
      props.nextTheme(temp - 1);
    } else {
      let temp = value + 1;
      setValue(temp);
      setFirstName(canFirstNames[temp - 1]);
      setSecondName(canSecondNames[temp - 1]);
      props.nextTheme(temp - 1);
    }
  }

  function changePrevCan() {
    if (value <= 1) {
      let temp = 5;
      setValue(temp);
      setFirstName(canFirstNames[temp - 1]);
      setSecondName(canSecondNames[temp - 1]);
      props.nextTheme(temp - 1);
    } else {
      let temp = value - 1;
      setValue(temp);
      setFirstName(canFirstNames[temp - 1]);
      setSecondName(canSecondNames[temp - 1]);
      props.nextTheme(temp - 1);
    }
  }

  return (
    <>
      <div className="page2">
        <div className="strawberry" style={props.page2}>
          <div className="leftside">
            <div className="discover">
              <p>
                DISCOVER MORE ENERGY <br /> DRINKS
              </p>
            </div>
            <div className="flavour">
              <div className="first-line">
                <h1>{firstName}</h1>
              </div>
              <div className="second-line">
                <h1>{secondName}</h1>
              </div>
            </div>
            <div className="neat-weight">
              <h3>VOL-355ML</h3>
            </div>
            <div className="ingrediants">
              <p>INGREDIANTS</p>
              <h3>
                CARBONATED WATER, CITRIC ACID, <br /> VEGETABLE JUICE COLOR,{" "}
                <br /> NATURAL FLAVORS,
              </h3>
            </div>
          </div>
          <div className="middle">
            <div className="heading-p">
              <div className="heading-p-first-line">
                <p>
                  GET CARRIED WITH YOUR{" "}
                  <span style={{ color: `${props.theme}` }}>
                    {firstName} {secondName}
                  </span>{" "}
                  DRINK.
                </p>
              </div>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quibusdam, debitis expedita ratione voluptate veniam
                amet, obcaecati dicta dolor, dolorum impedit ea rerum maxime
                molestiae.
              </h4>
            </div>
            <div className="extra-info">
              <div className="first-info">
                <div className="calorie">
                  <p>STORGE ADVICE</p>
                  <h4>4°C-6°C</h4>
                </div>
                <div className="price">
                  <p>CALORIES</p>
                  <h4>100kcl</h4>
                </div>
              </div>
            </div>
            <div className="dicover-btn">
              <a href="#" style={{ backgroundColor: `${props.theme}` }}>
                DISCOVER-MORE <i className="ri-arrow-right-fill"></i>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="main-img">
              <div className="img-con">
                <div className="img2">
                  <div className="img3">
                    <div className="strawberry2">
                      <img src={`${props.can}`} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nest-prev">
              <div className="prev-btn" onClick={changePrevCan}>
                <i className="ri-arrow-left-fill"></i>
              </div>
              <div className="middle-info">
                <div className="pages">
                  <p>{value}/5</p>
                </div>
                <div className="name">
                  <div className="name-first-line">
                    <h3>{firstName}</h3>
                  </div>
                  <div className="name-second-line">
                    <h3>{secondName}</h3>
                  </div>
                </div>
              </div>
              <div className="next-btn" onClick={changeNextCan}>
                <i className="ri-arrow-right-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Page2.propTypes = {
  page2: PropTypes.object.isRequired,
  can: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  nextTheme: PropTypes.func.isRequired, // Enforces page1 to be an object
};
