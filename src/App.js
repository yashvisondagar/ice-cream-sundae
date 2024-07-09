import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
import SummaryPage from "./components/summary";
import ThankYouPage from "./components/thankYou";
import { SundaeProvider } from "./SundaeContext";
import Header from "./components/header";

const App = () => {
  return (
    <Router>
      <Header />
      <SundaeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
        </Routes>
      </SundaeProvider>
    </Router>
  );
};

export default App;
