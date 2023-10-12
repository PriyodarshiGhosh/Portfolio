// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>
        You can reach out to me through the following channels:
      </p>
      <ul>
        <li>
          Email: <a href="mailto:youremail@example.com">youremail@example.com</a>
        </li>
        <li>
          LinkedIn: <a href="https://www.linkedin.com/in/yourusername">LinkedIn Profile</a>
        </li>
        <li>
          GitHub: <a href="https://github.com/yourusername">GitHub Profile</a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
