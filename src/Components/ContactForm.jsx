import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_r2knxbj",     // 👉 Replace with your actual service ID
        "template_zh0cecb",    // 👉 Replace with your actual template ID
        formRef.current,
        "dTOGruUYoZcu-HyNn"      // 👉 Replace with your actual public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#63C8D2] bg-clip-text">
          LET’S CONNECT TOGETHER
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Have a project in mind? Drop me a message and I’ll get back to you.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto p-8 space-y-6"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-2 text-sm text-gray-300">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-[#63C8D2] rounded-lg bg-transparent text-white focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@email.com"
              className="w-full px-4 py-3 border border-[#63C8D2] rounded-lg bg-transparent text-white focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-300">Subject</label>
          <input
            type="text"
            name="subject"
            required
            placeholder="What do you want to build?"
            className="w-full px-4 py-3 border border-[#63C8D2] rounded-lg bg-transparent text-white focus:outline-none focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-300">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell me about your project..."
            className="w-full px-4 py-3 border border-[#63C8D2] rounded-lg bg-transparent text-white focus:outline-none focus:border-cyan-500 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="relative overflow-hidden px-6 py-3 text-white font-semibold cursor-pointer bg-transparent border border-[#63C8D2] rounded-full z-10 group"
        >
          {loading ? "Sending..." : "Send Message"}
          <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-[#63C8D2] rounded-full z-0 transform -translate-x-1/2 group-hover:w-[300%] group-hover:h-[300%] transition-all duration-500 ease-out"></span>
          <span className="absolute inset-0 flex items-center justify-center z-10 group-hover:text-[#0A1331] transition-colors duration-300">
            {loading ? "Please wait..." : "Send Message"}
          </span>
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
