import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import ServicePage from "./Components/Services/ServicePage";
import ContactUs from "./Components/Contact/ContactUs";
import Footer from "./Components/Footer";
import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  useEffect(() => {
    const initialValue = document.body.style.zoom;

    // Change zoom level on mount
    document.body.style.zoom = "80%";

    return () => {
      // Restore default value
      document.body.style.zoom = initialValue;
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        {/* <body> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
        {/* </body> */}
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
