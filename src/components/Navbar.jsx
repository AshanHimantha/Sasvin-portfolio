import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Refined text shadow - less intense for a cleaner look
const navStyles = {
  textShadow: "0px 0px 1px rgba(255, 255, 255, 0.5)",
};

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  // Consistent link styling for both mobile and desktop
  const linkClasses = "relative group text-sm transition-colors";

  return (
    <nav
      className={classNames(
        "fixed w-full lg:px-[8.5rem] px-6 py-4 md:py-6 transition-all duration-500 z-50",
        hidden ? "-translate-y-full" : "translate-y-0",
        isLoaded ? "opacity-100" : "opacity-0 translate-y-[-10px]",
      )}
    >
      {isMobile ? (
        // Mobile Layout
        <div className="flex flex-col">
          {/* Centered Logo with animation */}
          <div className="flex justify-center mb-6">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo.svg" 
                alt="Logo" 
                srcSet="" 
                className={`w-12 transition-all duration-500 hover:scale-110 ${isLoaded ? 'rotate-0' : 'rotate-90'}`}
              />
            </Link>
          </div>

          {/* Vertical Navigation with consistent text styling */}
          <div className="flex flex-col items-end gap-4 text-black" style={navStyles}>
            <Link to="/work" className={linkClasses}>
              <span className="hover:opacity-70">Work</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className={linkClasses}>
              <span className="hover:opacity-70">About me</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className={linkClasses}>
              <span className="hover:opacity-70">Say Hello</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      ) : (
        // Desktop Layout
        <div className="flex flex-row justify-between items-center">
          {/* Logo with hover animation */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logo.svg" 
              alt="Logo" 
              srcSet="" 
              className="w-12 transition-transform duration-500 hover:scale-110 hover:rotate-3" 
            />
          </Link>

          {/* Horizontal Navigation with consistent text styling */}
          <div className="flex items-center gap-8" style={navStyles}>
            <Link to="/work" className={linkClasses}>
              <span className="hover:opacity-70">Work</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className={linkClasses}>
              <span className="hover:opacity-70">About me</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact">
              <button
                className="rounded-md transition-all outline-0 duration-300 bg-transparent border border-black text-black 
                  hover:bg-black hover:text-white hover:border-transparent px-4 py-2 text-sm"
              >
                Say Hello
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

