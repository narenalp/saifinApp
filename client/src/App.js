import React from "react";
//import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Customer from "./pages/Customer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Helmet>
          <title>Sai Finance Service</title>
          <meta name="description" content="" />
          <meta name="keywords" content="Finance" />
        </Helmet>
        <layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Customer" element={<Customer />} />
          </Routes>
        </layout>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
