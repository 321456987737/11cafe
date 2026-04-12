"use client";

import { useState } from "react";
import {motion} from "framer-motion"
export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const { name, email, subject, message } = form;

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ifti.hazara205@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Small delay for better UX
    setTimeout(() => {
      window.open(mailtoLink, "_blank");
      setLoading(false);
    }, 800);
  };

  return (
    <section className="bg-white md:py-20 py-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
           <motion.h2 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }} className="text-4xl md:text-5xl font-semibold mb-4 Merriweather">
             Send us message
           </motion.h2>

           <motion.p 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }} className="text-gray-600 leading-relaxed">
             Whether you have a question, feedback, or just want to say hello, feel free to contact us. Our team is always happy to help.
           </motion.p>
         </div>

        {/* Form */}
        <motion.form
        
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4, delay:0.6 }}
                viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl "
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#813831]"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#813831]"
            required
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border p-3 rounded-md md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#813831]"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="border p-3 rounded-md md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#813831]"
            required
          />

          {/* Button */}
          <button
            disabled={loading}
           className=" text-black py-3 rounded-md md:col-span-2 border hover:bg-[#813831] cursor-pointer hover:text-white transition duration-300"
          >
            {loading ? "Redirecting..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
