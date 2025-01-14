import Banner from "./Banner";
import Header from "./Header";

function Services() {
  const data = {
    backgroundImage: "url(banner_7.jpg)",
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
