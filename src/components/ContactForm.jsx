import React from "react";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name},${lastName},${message}`);
    localStorage.setItem("firstName", name);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("mess", message);
  };

  return (
    <div className="contact-outer">
      <div className="container">
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="col-12">
            <textarea
              type="text"
              className="form-control"
              placeholder="Message"
              aria-label=""
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary common-btn btn-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
