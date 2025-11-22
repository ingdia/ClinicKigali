import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookDoctor from "./pages/BookDoctor";
import DoctorDetails from "./pages/DoctorDetails";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookDoctor />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
