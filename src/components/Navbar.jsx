import { useEffect } from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            Rethabile<span className="text-yellow-500">.tech</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#goal"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Goals{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>

            <div className="button-container">
              <a
                href="https://drive.google.com/file/d/1y2-0koO0Vjdvtof4MtI14Nc7DFzMXP6u/view"
                download="Rethabile_Chomi_Resume.pdf"
              >
                <button
                  type="button"
                  className="bg-yellow-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                >
                  <span className="button__text">Download CV</span>
                </button>
              </a>
            </div>

            <div className="flex gap-4 mt-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
