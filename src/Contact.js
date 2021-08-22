import "./Contact.css";
const Contact = () => {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <p>Lets get in touch and talk about your next project.</p>
      <div className="Contact-input">
        {" "}
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Comment" />
      </div>
      <button>SEND MESSAGE</button>
    </div>
  );
};

export default Contact;
