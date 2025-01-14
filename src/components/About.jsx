import Banner from "./Banner";
import Header from "./Header";

function About() {
  const data = {
    backgroundImage: "url(banner_5.jpg)",
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
