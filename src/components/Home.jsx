import Banner from "./Banner";
import Header from "./Header";
import bgImage from "../uploads/images/banner_7.jpg";

function Home() {
  const data = {
    backgroundImage: `url(${bgImage})`,
    title: "Best app for your lifestyle",
  };
  return (
    <div className="Home-section">
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

export default Home;
