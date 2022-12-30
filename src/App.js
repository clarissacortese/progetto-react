import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Background from "./components/background/background";
import Home from "./components/home/home";
import Contacts from "./components/contacts/contacts";

export default function App() {
  return (
    <Router basename={process.env.REACT_APP_ROUTER_BASE || ""}>
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<Contacts />} />
      </Routes>
    </Router>
  );
}