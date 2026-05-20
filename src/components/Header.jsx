import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`headerContainer flex justify-between items-center px-40 py-5 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <Link to="/" className="logo flex gap-2 font-bold text-2xl">
        <div className="logo flex gap-2 font-bold text-2xl cursor-pointer">
          <h3 className="px-2 bg-indigo-600 rounded-md border border-slate-700">
            R
          </h3>
          <h3>Ratan</h3>
        </div>
        </Link>
        <div className="navItem ">
          <ul className="flex gap-8">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `transition-colors hover:text-indigo-400 ${
                    isActive ? "text-indigo-400" : "text-slate-100"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors hover:text-indigo-400 ${
                    isActive ? "text-indigo-400" : "text-slate-100"
                  }`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `transition-colors hover:text-indigo-400 ${
                    isActive ? "text-indigo-400" : "text-slate-100"
                  }`
                }
              >
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `transition-colors hover:text-indigo-400 ${
                    isActive ? "text-indigo-400" : "text-slate-100"
                  }`
                }
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition-colors hover:text-indigo-400 ${
                    isActive ? "text-indigo-400" : "text-slate-100"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
