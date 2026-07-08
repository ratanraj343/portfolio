import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];
  return (
    <>
      <header
        className={`headerContainer flex justify-between items-center px-6 md:px-20 lg:px-40 py-5 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
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
        <button
  className="md:hidden text-slate-100 text-2xl"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <FiX /> : <FiMenu />}
</button>
<div
  className={`${
    isOpen ? "flex" : "hidden"
  } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-slate-900/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b md:border-none border-slate-800 py-6 md:py-0 gap-6 md:gap-8 items-center`}
>
  {navLinks.map((link) => (
    <NavLink
      key={link.to}
      to={link.to}
      end={link.end}
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        `transition-colors hover:text-indigo-400 ${
          isActive ? "text-indigo-400" : "text-slate-100"
        }`
      }
    >
      {link.label}
    </NavLink>
  ))}
</div>


        {/* <div className="navItem hidden md:block ">
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
        {isOpen && (
  <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 md:hidden">
    <ul className="flex flex-col items-center gap-6 py-6">
      <li>
        <NavLink
          to="/"
          end
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
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
)} */}
      </header>
    </>
  );
};
export default Header;
