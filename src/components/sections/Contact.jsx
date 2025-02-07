import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .send("service_8v8fnt7", "template_0tqfh2k", formData, "De-I5KLnpq_vffJhu")
    .then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been successfully sent.",
          confirmButtonColor: "#FFD700",
        });
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Failed to send message",
          text: "Please try again.",
          confirmButtonColor: "#FFD700",
        });
      }
    );
};

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-10"
    >
      <RevealOnScroll>
        <div className="px-3 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
