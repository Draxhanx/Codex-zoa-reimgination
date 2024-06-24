import { PropTypes } from "prop-types";

export default function Page2(props) {
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
                <h1>STRAWBERRY</h1>
                <h1>FROZEN</h1>
                <h1>WILD</h1>
                <h1>PINEAPLLE</h1>
              </div>
              <div className="second-line">
                <h1>WATERMELON</h1>
                <h1>GRAPE</h1>
                <h1>ORANGE</h1>
                <h1>COCONUT</h1>
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
                  GET CARRIED WITH YOUR <span>STRAWBERRY WATERMELON</span>{" "}
                  DRINK.
                </p>
                <p>
                  GET CARRIED WITH YOUR <span>FROZEN GRAPE</span> DRINK.
                </p>
                <p>
                  GET CARRIED WITH YOUR <span>WILD ORANGE</span> DRINK.
                </p>
                <p>
                  GET CARRIED WITH YOUR <span>PINEAPPLE COCONUT</span> DRINK.
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
              <a href="#">
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
                      <img src="Images/cherry.png" alt="" />
                    </div>
                    <div className="grape">
                      <img src="Images/grape.png" alt="" />
                    </div>
                    <div className="orange">
                      <img src="Images/orange.png" alt="" />
                    </div>
                    <div className="pineapple">
                      <img src="Images/pineapple.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nest-prev">
              <div className="prev-btn">
                <a href="#">
                  <i className="ri-arrow-left-fill"></i>
                </a>
              </div>
              <div className="middle-info">
                <div className="pages">
                  <p>1/4</p>
                  <p>2/4</p>
                  <p>3/4</p>
                  <p>4/4</p>
                </div>
                <div className="name">
                  <div className="name-first-line">
                    <h3>STRAWBERRY</h3>
                    <h3>FROZEN</h3>
                    <h3>WILD</h3>
                    <h3>PINEAPLLE</h3>
                  </div>
                  <div className="name-second-line">
                    <h3> WATERMELON</h3>
                    <h3>GRAPE</h3>
                    <h3>ORANGE</h3>
                    <h3>COCONUT</h3>
                  </div>
                </div>
              </div>
              <div className="next-btn">
                <a href="#">
                  <i className="ri-arrow-right-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Page2.propTypes = {
  page2: PropTypes.object.isRequired, // Enforces page1 to be an object
};
