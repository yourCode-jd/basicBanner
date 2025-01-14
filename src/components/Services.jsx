import Banner from "./Banner";
import Header from "./Header";
import bgImage from "../uploads/images/banner_5.jpg";

function Services() {
  const data = {
    backgroundImage: `url(${bgImage})`,
    title: "Services",
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

export default Services;
