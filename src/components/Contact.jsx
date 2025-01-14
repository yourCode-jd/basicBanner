import Banner from "./Banner";
import Header from "./Header";
import ContactForm from "./ContactForm";

function Contact() {
  const data = {
    backgroundImage: "url(banner_7.jpg)",
    title: "Contact Us",
    // textParaStyle: { color: "#fff" },
  };

  return (
    <div className="About-section">
      <>
        <div className="container-fluid">
          <div className="row">
            <Header />
            <Banner {...data} />
            <ContactForm />
          </div>
        </div>
      </>
    </div>
  );
}

export default Contact;
