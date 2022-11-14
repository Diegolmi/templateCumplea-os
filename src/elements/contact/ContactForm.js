import React, { useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p className="success-message">
      Gracias por confirmar tu asistencia!!
    </p>
  );
};

function ContactForm({ props, formStyle }) {
  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_l1h6yf3",
        "template_2vu1fiv",
        e.target,
        "DFd5J-rH55DC1CPK7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
      <div className="form-group">
        <input
          type="text"
          name="from_name"
          placeholder="Nombre"
          required
          maxLength={40}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="from_email"
          placeholder="Email"
          required
          maxLength={40}
        />
      </div>

      <div className="form-group">
        <input
          type="number"
          name="from_phone"
          placeholder="Telefono"
          required
          maxLength={40}
        />
      </div>

      <div className="form-group">
        <input type="text" name="from_subject" placeholder="Titulo" required />
      </div>
      {/* <div className="form-group">
        <label>Attach file:</label>
        <input type="file" name="my_file"></input>
      </div> */}

      <div className="form-group">
        <textarea
          name="message"
          placeholder="Mensaje"
          required
          maxLength={700}
        ></textarea>
      </div>

      <div className="form-group">
        <button className="btn-default btn-large">Enviar</button>
      </div>

      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
  );
}
export default ContactForm;
