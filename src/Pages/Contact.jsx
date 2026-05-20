import { FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
const Contact = () => {
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
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-slate-300">Name</label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">Email</label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">Message</label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your project or idea..."
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-xl px-6 py-3 text-sm font-medium"
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
