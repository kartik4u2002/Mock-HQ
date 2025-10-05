import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import LandingComponent from './components/LandingComponent'
import Dashboard from './components/Dashboard'
import Signup from './components/SignUp'
import Login from './components/Login'

export default function App() {
  // If you need user state later, add it and provide to components via context or props
  const user = { name: 'User' }

  return (
    // Full viewport background + layout
    <div className="min-h-screen w-full bg-[url('/background.jpg')] bg-cover bg-center">
      <div className="w-full h-full min-h-screen flex flex-col bg-white/60 backdrop-blur-md">
        <Router>
          <main className="flex-grow w-full">
            <Routes>
              {/* Landing page (default) */}
              <Route
                path="/"
                element={
                  <LandingComponent
                    /* Note: with react-router, you can use useNavigate inside LandingComponent
                       instead of passing navigation callbacks. Keep props only if you want them. */
                  />
                }
              />

              {/* Dashboard - public for now (you can protect it later) */}
              <Route
                path="/dashboard"
                element={<Dashboard user={user} />}
              />

              {/* Auth */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />

              {/* Redirect any unknown path to landing */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  )
}