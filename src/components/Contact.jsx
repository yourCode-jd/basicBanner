import Banner from "./Banner";
import Header from "./Header";
import ContactForm from "./ContactForm";
import bgImage from "../uploads/images/08.jpg";

function Contact() {
  const data = {
    backgroundImage: `url(${bgImage})`,
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
