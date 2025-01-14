import Banner from "./Banner";
import Header from "./Header";
import Card from "../components/Card";

function Home() {
  const data = {
    backgroundImage: "url(.../src/uploads/images/banner_1.jpg)",
    title: "Best app for your lifestyle",
  };
  return (
    <div className="Home-section">
      <>
        <div className="container-fluid">
          <div className="row">
            <Header />
            <Banner {...data} />
            <Card />
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
