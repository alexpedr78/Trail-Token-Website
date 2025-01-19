import React from "react";

function Contact() {
  return (
    <div className="Contact">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out!</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
