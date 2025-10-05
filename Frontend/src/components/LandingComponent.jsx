import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/Landing.png"; // put your image at src/assets/Landing.png

// LandingComponent.jsx
// Built for a React + Vite project (JSX) using Tailwind CSS for styling.

export default function LandingComponent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full font-sans text-slate-900 bg-gradient-to-r from-slate-800 via-slate-600 to-sky-300">
      {/* Top navigation */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-sky-600 to-indigo-600 flex items-center justify-center text-white font-bold">
              MH
            </div>
            <span className="font-semibold text-lg">MockHQ</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <button
              onClick={() => {
                const el = document.getElementById("features");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-slate-900"
            >
              Features
            </button>

            <button
              onClick={() => {
                const el = document.getElementById("how");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-slate-900"
            >
              How it works
            </button>

            <button onClick={() => navigate("/login")} className="hover:text-slate-900">
              Login
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-sm">
              Master Your Interview. Land Your Dream Job
            </h1>

            <p className="text-slate-200 max-w-lg text-lg">
              Practice with realistic mock interviews, get instant feedback, and boost your confidence.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/signup")}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
              >
                Start Your Free Mock Interview
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("how");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white/90 underline hidden sm:inline-block"
              >
                How it works
              </button>
            </div>

            {/* subtle feature examples below hero text for wider screens */}
            <div className="hidden md:flex gap-4 mt-6">
              <div className="bg-white/10 rounded-lg px-4 py-3 text-slate-200">Realistic video interviews</div>
              <div className="bg-white/10 rounded-lg px-4 py-3 text-slate-200">AI & human feedback</div>
              <div className="bg-white/10 rounded-lg px-4 py-3 text-slate-200">Track improvement over time</div>
            </div>
          </div>

          {/* Right image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={hero} alt="Person on laptop" className="w-full h-auto object-cover" />
              </div>
              {/* decorative star in corner */}
              <div className="absolute -bottom-4 -right-6 w-12 h-12 bg-white/20 rounded-full blur-sm" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - three columns */}
      <section id="how" className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How MockHQ Helps You Succeed</h2>
          <p className="text-slate-200 mb-10">How It Works</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white/8 rounded-2xl p-8 shadow-inner backdrop-blur-sm">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M9 3v4m6-4v4m-9 6h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mt-6">1. Choose Your Role</h3>
              <p className="text-center text-slate-200 mt-3">Select from various industry-specific interview simulations.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/8 rounded-2xl p-8 shadow-inner backdrop-blur-sm">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553 2.276A2 2 0 0120 14.118V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.882a2 2 0 01.447-1.842L9 10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mt-6">Practice & Perform</h3>
              <p className="text-center text-slate-200 mt-3">Engage in realistic video interviews with AI or human feedback.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/8 rounded-2xl p-8 shadow-inner backdrop-blur-sm">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-700 to-indigo-900 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mt-6">3. Get Actionable Feedback</h3>
              <p className="text-center text-slate-200 mt-3">Receive detailed analysis, scores, and improvement tips.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID - six cards */}
      <section id="features" className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold text-white mb-8">Why Choose MockHQ?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="bg-white/8 rounded-2xl p-6 h-56 flex flex-col items-start justify-start gap-4 shadow-inner backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white">Feature Title</h4>
                <p className="text-slate-200 text-sm">Short description about this feature that explains the benefit briefly to the user.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <footer className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-10 text-slate-200">
          <div className="text-sm">© {new Date().getFullYear()} MockHQ — All rights reserved</div>
        </div>
      </footer>
    </div>
  );
}
