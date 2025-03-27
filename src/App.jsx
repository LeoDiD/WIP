import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Github, Linkedin } from 'lucide-react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log('Dark mode:', !darkMode); // Debugging
  };

  return (
    <main className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <motion.div
        className="p-6 max-w-4xl mx-auto flex flex-col items-start"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <section id="home" className="flex flex-col w-full px-6">
          <motion.div
            className="flex-1 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-6xl font-bold mb-4">
              Hi, I'm Leovi
              <span className="wave">👋</span>
            </h1>
            <p className="text-2xl mb-6">
              Aspiring Web Full Stack. I enjoy coming up with website ideas <br />
              and turning them into code.<br />
            </p>
          </motion.div>
        </section>

        <section id="about" className="mt-8 w-full px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-left">About</h2>
            <p className="text-xl mb-4 text-left">
              I'm a 2nd-year BSIT student with a focus on <br />
              <span className="font-bold">Web Full Stack Development.</span>
              I’m continuously improving my expertise in frontend development. <br />
              I'm also interested in learning more about backend development. <br />
            </p>
          </motion.div>
        </section>

        <section id="skills" className="mt-8 w-full px-6">
          <h2 className="text-3xl font-bold mb-4 text-left">Skills</h2>
          <div></div>
        </section>

        <div className="floating-action-bar flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <a href="#home" className="fab-icon bg-white rounded-full shadow-lg p-4 flex space-x-6" data-label="Home">
            <Home />
          </a>
          <a href="https://github.com/LeoDiD" target="_blank" rel="noopener noreferrer" className="fab-icon" data-label="GitHub">
            <Github />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="fab-icon" data-label="LinkedIn">
            <Linkedin />
          </a>
          <button
  type="button"
  onClick={toggleDarkMode}
  className="fab-icon"
  data-label="Toggle Dark Mode"
>
  {darkMode ? <FaSun /> : <FaMoon />}
</button>
        </div>
      </motion.div>
    </main>
  );
}

export default App;