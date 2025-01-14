import React from "react";

function Banner(props) {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: props.backgroundImage,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="hero-content">
              <div className="sub-content">
                <h1 className="hero-title" style={props.textStyle}>
                  {props.title}{" "}
                </h1>
                <p className="hero-text" style={props.textParaStyle}>
                  {props.para}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="hero-btn">
                  <a
                    className="btn btn-primary common-btn btn-lg"
                    href="https://www.google.com/"
                  >
                    {props.btnText}Try for free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
