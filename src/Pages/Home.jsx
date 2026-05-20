import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect,useState } from "react";
const Home = () => {
  const words = ["creativity", "clarity"];
  const [currentWord, setCurrentWord] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <section className="min-h-screen flex flex-col justify-start px-40 pt-24 ">
      <div className="mt-32 space-y-7 max-w-3xl">
        <p className="text-lg text-slate-400">Hello, I'm </p>
        <h1 className="text-6xl font-bold ">Ratan Kumar</h1>
        <h2 className="text-2xl font-medium ">Software Engineer</h2>
        <p className="text-lg text-slate-400 ">
          Creating thoughtful digital experiences at the intersection of code
          and{" "}
          <span className="inline-block min-w-[120px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[currentWord]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="inline-block text-indigo-400"
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </span>
        </p>
        <div className="flex gap-6 pt-6">
          <Link
            to="/projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-500 transition-colors"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 border border-slate-600 text-slate-200 rounded-md font-medium hover:border-indigo-400 hover:text-indigo-400 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Home;
