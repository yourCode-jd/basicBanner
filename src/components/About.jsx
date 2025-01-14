import Banner from "./Banner";
import Header from "./Header";
import bgImage from "../uploads/images/banner_2.jpg";

function About() {
  const data = {
    backgroundImage: `url(${bgImage})`,
    title: "About Us",
  };

  return (
    <div className="About-section">
      <>
        <div className="container-fluid">
          <div className="row">
            <Header />
            <Banner {...data} />
          </div>
        </div>
      </>
    </div>
  );
}

export default About;
