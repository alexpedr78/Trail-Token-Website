function Contact() {
  return (
    <div className="Contact">
      <h2>Contact Us</h2>
      <p>Want to partner?, feel free to reach out!</p>
      <form className="form-contact">
        <input
          className="input-Contact"
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          className="input-Contact"
          type="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="input-Contact"
          placeholder="Your Message"
          required
        ></textarea>
        <button className="button-regular" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
