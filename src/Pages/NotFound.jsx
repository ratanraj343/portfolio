import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">

      <div className="text-center space-y-8">

        <h1 className="text-[10rem] font-bold text-slate-600 leading-none">
          404
        </h1>

        <div className="space-y-4">

          <h2 className="text-3xl font-medium">
            Oops — this page seems to be missing.
          </h2>

          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>

        </div>

        <div className="flex items-center justify-center gap-4 pt-4">

          <Link
            to="/projects"
            className="bg-slate-900/40 border border-slate-800 rounded-xl px-6 py-3 text-sm transition-all hover:border-indigo-400 hover:text-indigo-400"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-xl px-6 py-3 text-sm font-medium"
          >
            Contact Me
          </Link>

        </div>

      </div>

    </section>
  );
};

export default NotFound;