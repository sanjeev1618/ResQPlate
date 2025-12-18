import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Navbar from "./components/NavBar.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Contact from "./components/Contact/Contact.jsx"; 
import About from "./components/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<DonorDashboard />} />
        <Route path="/NGOsdashboard" element={<NGOsDashboard />} />
        <Route path="/Applayout" element={<AppLayout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
