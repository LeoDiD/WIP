import React from 'react';
import './App.css'

function App() {

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-white text-black p-6 max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">
              Hi, I'm Leovi
              <span className="wave">
                👋
              </span>
            </h1>
            <p className="text-xl mb-4">
              Frontend Developer. I love designing websites and turning them into code. Slightly addicted to coffee, and not a fan of CSS.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img alt="A hand holding a cup of coffee" className="rounded-lg shadow-lg" src="https://placehold.co/150x150"/>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-2">
            About
          </h2>
          <p className="text-lg mb-4">
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
        </div>
      </div>
    </div>
  )
}

export default App