import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Sun, Moon } from "lucide-react";

export default function Navbar({ fullName, socialLinks }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      // PERUBAHAN DISINI:
      // Saya menghapus perbedaan 'py-6' dan 'py-4'.
      // Sekarang saya pasang 'py-4' secara global di akhir class, jadi ukurannya tidak akan berubah-ubah.
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <div 
          className="font-bold text-xl md:text-2xl bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent cursor-pointer tracking-tight transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          My Personal <span className="text-blue-600 dark:text-blue-400">CV</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Profile", "Skills", "Experience"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm uppercase tracking-wide"
            >
              {item}
            </button>
          ))}
          
          <div className="h-6 w-[1px] bg-gray-300 dark:bg-gray-700 mx-2"></div>
          
          <div className="flex items-center space-x-4">
            {/* Tombol Dark Mode */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform active:scale-95"
              aria-label="Toggle Dark Mode"
            >
              <div className="relative w-5 h-5">
                <Sun 
                  size={20} 
                  className={`absolute top-0 left-0 text-yellow-500 transition-all duration-500 transform ${
                    theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} 
                />
                <Moon 
                  size={20} 
                  className={`absolute top-0 left-0 text-gray-700 dark:text-gray-300 transition-all duration-500 transform ${
                    theme === 'light' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                  }`} 
                />
              </div>
            </button>

            <a href={socialLinks?.github} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={socialLinks?.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button + Dark Mode Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-200"
          >
            {theme === 'dark' ? <Sun size={20} className="text-yellow-500"/> : <Moon size={20}/>}
          </button>
          
          <button
            className="text-gray-700 dark:text-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800 p-4 md:hidden flex flex-col space-y-4 animate-fade-in">
          {["Profile", "Skills", "Experience"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-left text-gray-700 dark:text-gray-200 font-medium py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-4"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}