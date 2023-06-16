import React, { useState } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const [formContent, setFormContent] = useState({
    name:'',
    email:'',
    subject:'',
    message:'',
  });
  function sendMail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_f8pl882",
      "template_79mouyu",
      e.target,
      "CHXhe3Mete0IX6HBC"
    ).then(res=>{
      alert("Sent Email Successfully!!");
      setFormContent({
        name:'',
        email:'',
        subject:'',
        message:'',
      });
    }).catch((err)=>console.log(err));
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormContent((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8 text-center">
          Reach Out to Me
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.318302870397!2d77.56655540412103!3d12.929253320232348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15986765d7d9%3A0xbba2fea7014e5087!2sJayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1686858120559!5m2!1sen!2sin"
              className="border-0 w-full h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-red-200 px-4 lg:px-8 py-8">
            <form className="w-full" onSubmit={sendMail}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none
                    rounded-[5px]"
                  name="name"
                  value = {formContent.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none
                    rounded-[5px]"
                  name="email"
                  value = {formContent.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none
                    rounded-[5px]"
                  name="subject"
                  value = {formContent.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  row={3}
                  placeholder="Write your message..."
                  className="w-full p-3 focus:outline-none
                    rounded-[5px]"
                  name="message"
                  value = {formContent.message}
                  onChange={handleInputChange}
                />
              </div>
              <button
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white
              hover:bg-headingColor text-center ease-linear duration-150"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
