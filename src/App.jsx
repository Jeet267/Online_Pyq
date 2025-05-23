import "./App.css";
import FeaturedPYQSection from "./components/FeaturepyqSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PYQPage from "./components/PYQPage";
import PYQSection from "./components/PYQSection";
import SubjectYearPage from "./components/SubjectYearPage";
import YearPdfPage from "./components/YearPdfPage";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <FeaturedPYQSection />
              <PYQSection />
            </>
          }
        />
        <Route path="/pyqs/:subjectName" element={<PYQPage />} />
        <Route path="/pyqs/:subjectName/:companyName" element={<SubjectYearPage />} />
        <Route path="/pyqs/:subjectName/:companyName/:year" element={<YearPdfPage />} />

        



      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
