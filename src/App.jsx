import React from 'react';
import { motion } from 'framer-motion';
import './App.css'

function App() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <motion.div
        className="bg-white text-black p-6 max-w-4xl mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            className="flex-1 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-6xl font-bold mb-4">
              Hi, I'm Leovi
              <span className="wave">
                👋
              </span>
            </h1>
            <p className="text-2xl mb-6">
              Frontend Developer. I love designing websites <br />
              and turning them into code. Slightly addicted <br />
              to coffee, and not a fan of CSS.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            About
          </h2>
          <p className="text-xl mb-4">
            By the middle of 2024, I graduated with a Bachelor of Science in Information Technology,
            <span className="font-bold">
              majoring in Web Development
            </span>
            , interned at one of the first IT companies in Bataan and landed my
            first job as an Assistant Junior Programmer. In the past, I had the opportunity to join
            <a className="underline" href="#">
              IRCITE 2024
            </a>
            for a paper presentation and also won the
            <span className="font-bold">
              Best Paper in the IT Category
            </span>
            at
            <a className="underline" href="#">
              Bataan Peninsula State University
            </a>
            .
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App