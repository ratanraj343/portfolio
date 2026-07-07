import { FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, message: formData.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
      });
  };
  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-20 items-start">
          {/* Left Side */}
          <div className="space-y-6">
            <p className="text-base font-medium uppercase tracking-[0.15em] text-slate-300">
              Contact
            </p>

            <h1 className="text-4xl font-medium leading-relaxed max-w-md">
              Let’s build something meaningful together.
            </h1>

            <p className="text-slate-400 leading-relaxed max-w-lg">
              Always interested in meaningful work, creative collaborations, and
              building thoughtful user experiences.
            </p>
            <div className="space-y-5 pt-8">
              <a
                href="mailto:ratan.kumar8841@gmail.com"
                className="group flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <FiMail className="text-slate-500 transition-colors group-hover:text-indigo-400" />

                <span>Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ratan-kumar-b0b98618b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <FaLinkedinIn className="text-slate-500 transition-colors group-hover:text-indigo-400" />

                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/ratanraj343"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <FaGithub className="text-slate-500 transition-colors group-hover:text-indigo-400" />

                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-slate-300">Name <span className="text-red-400">*</span></label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors" required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">Email <span className="text-red-400">*</span></label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors" required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">Message <span className="text-red-400">*</span></label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors resize-none" required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-xl px-6 py-3 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-400 text-sm">
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
