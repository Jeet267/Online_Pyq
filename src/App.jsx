import "./App.css";
import FeaturedPYQSection from "./components/FeaturepyqSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PYQPage from "./components/PYQPage";
import PYQSection from "./components/PYQSection";
import SubjectYearPage from "./components/SubjectYearPage";
import YearPdfPage from "./components/YearPdfPage";
import RecentAdded from "./components/Recentadded";
import React from 'react'
import { useState } from 'react'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react'
import SigninModal from './components/SigninModal'
import SignupModal from './components/SignupModal'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

// Import your publishable key from .env.local
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key. Make sure VITE_CLERK_PUBLISHABLE_KEY is set in your .env.local file.");
}

// This is the main App component that will be wrapped by ClerkProvider
function AppContent() {
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  const handleSignInSuccess = () => {
    setShowSignIn(false)
  }

  const handleSignUpSuccess = () => {
    setShowSignUp(false)
  }

  const switchToSignup = () => {
    setShowSignIn(false)
    setShowSignUp(true)
  }

  const switchToSignin = () => {
    setShowSignUp(false)
    setShowSignIn(true)
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar 
          onSignInClick={() => setShowSignIn(true)} 
          onSignUpClick={() => setShowSignUp(true)} 
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<>
              <FeaturedPYQSection />
              <PYQSection />
              <RecentAdded />
            </>} />
            <Route path="/pyqs/:subjectName" element={<PYQPage />} />
            <Route path="/pyqs/:subjectName/:companyName" element={<SubjectYearPage />} />
            <Route path="/pyqs/:subjectName/:companyName/:year" element={<YearPdfPage />} />
            <Route path="/signed-in-content" element={
              <SignedIn>
                <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">Welcome Back!</h2>
                    <p className="text-gray-600">You are signed in. Here's your special content.</p>
                  </div>
                </div>
              </SignedIn>
            } />
          </Routes>
        </main>

        <Footer />

        {showSignIn && (
          <SigninModal
            onClose={() => setShowSignIn(false)}
            onSigninSuccess={handleSignInSuccess}
            switchToSignup={switchToSignup}
          />
        )}

        {showSignUp && (
          <SignupModal
            onClose={() => setShowSignUp(false)}
            onSignupSuccess={handleSignUpSuccess}
            switchToSignin={switchToSignin}
          />
        )}
      </div>
    </Router>
  );
}

// This is the component that will be exported and includes ClerkProvider
function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <AppContent />
    </ClerkProvider>
  );
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
