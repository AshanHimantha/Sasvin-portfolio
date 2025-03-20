import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Refined text shadow - less intense for a cleaner look
const navStyles = {
  textShadow: "0px 0px 1px rgba(255, 255, 255, 0.5)",
};

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Improved navigation to home
  const navigateToHome = () => {
    if (location.pathname !== '/') {
      navigate('/#home');
    } else {
      scrollToSection('home');
    }
  };

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

  // Check for hash in URL and scroll to that section
  useEffect(() => {
    if (window.location.hash) {
      // Extract section ID from the hash
      const sectionId = window.location.hash.substring(1);
      
      // Use setTimeout to ensure DOM is fully loaded
      setTimeout(() => {
        // Find the section
        const section = document.getElementById(sectionId);
        if (section) {
          // Scroll to the section without removing the hash
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.pathname]); // Trigger when pathname changes

  // Updated scrollToSection function to handle non-root paths
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    
    // If we're not on the root path, navigate to root with hash
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }
    
    // If on root path and section exists, scroll to it
    if (section) {
      // Update URL with hash
      window.history.pushState({}, '', `#${sectionId}`);
      
      // Scroll to the section
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Consistent link styling for both mobile and desktop
  const linkClasses = "relative group text-sm transition-colors";

  return (
    <nav
      className={classNames(
        "fixed w-full lg:px-[8.5rem] px-6 py-4 md:py-6 transition-all duration-500 z-50 ",
        hidden ? "-translate-y-full" : "translate-y-0",
        isLoaded ? "opacity-100" : "opacity-0 translate-y-[-10px]",
      )}
    >
      {isMobile ? (
        // Mobile Layout
        <div className="flex flex-col">
          {/* Centered Logo with animation */}
          <div className="flex justify-center mb-6">
            <a onClick={() => scrollToSection("hero")} className="flex items-center cursor-pointer">
              <img 
                src="/images/logo.svg" 
                alt="Logo" 
                srcSet="" 
                className={`w-12 transition-all duration-500 hover:scale-110 ${isLoaded ? 'rotate-0' : 'rotate-90'}`}
              />
            </a>
          </div>

          {/* Vertical Navigation with consistent text styling */}
          <div className="flex flex-col items-end gap-4 text-black" style={navStyles}>
            <a onClick={() => scrollToSection("work")} className={`${linkClasses} cursor-pointer`}>
              <span className="hover:opacity-70">Work</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
            <a onClick={() => scrollToSection("about")} className={`${linkClasses} cursor-pointer`}>
              <span className="hover:opacity-70">About me</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
            <a  href="mailto:imethsasvin14@gmail.com"  className={`${linkClasses} cursor-pointer`}>
              <span className="hover:opacity-70">Say Hello</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      ) : (
        // Desktop Layout
        <div className="flex flex-row justify-between items-center">
          {/* Logo with hover animation */}
          <a onClick={() => scrollToSection("hero")} className="flex items-center cursor-pointer">
            <img 
              src="/images/logo.svg" 
              alt="Logo" 
              srcSet="" 
              className="w-12 transition-transform duration-500 hover:scale-110 hover:rotate-3" 
            />
          </a>

          {/* Horizontal Navigation with consistent text styling */}
          <div className="flex items-center gap-8" style={navStyles}>
            <a onClick={() => scrollToSection("work")} className={`${linkClasses} cursor-pointer`}>
              <span className="hover:opacity-70">Work</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
            <a onClick={() => scrollToSection("about")} className={`${linkClasses} cursor-pointer`}>
              <span className="hover:opacity-70">About me</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
                       <a 
              href="mailto:imethsasvin14@gmail.com" 
              className="cursor-pointer"
            >
              <button
                className="rounded-md transition-all outline-0 duration-300 bg-transparent border border-black text-black 
                  hover:bg-black hover:text-white hover:border-transparent px-4 py-2 text-sm"
              >
                Say Hello
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

