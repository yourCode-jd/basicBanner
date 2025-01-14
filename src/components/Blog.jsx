import Banner from "./Banner";
import Header from "./Header";
import bgImage from "../uploads/images/banner_8.jpg";

function Blog() {
  const data = {
    backgroundImage: `url(${bgImage})`,
    title: "Blog",
    // textParaStyle: { color: "#fff" },
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

export default Blog;
