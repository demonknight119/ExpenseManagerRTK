import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Dashboard from "./Pages/Dashboard";
import Analytics from "./Pages/Analytics";
import History from "./Pages/History";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
