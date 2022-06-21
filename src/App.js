import React from "react";
import Navbar from "./components/Navbar";
import FirstPage from "./components/FirstPage";
// import SecondPage from "./components/SecondPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SecondPage from "./components/SecondPage";
function App() {
  return (
    <div className="App">
      {/* <FirstPage /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/play" element={<SecondPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
