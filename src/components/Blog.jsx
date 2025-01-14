import Banner from "./Banner";
import Header from "./Header";

function Blog() {
  const data = {
    backgroundImage: "url(banner_5.jpg)",
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
