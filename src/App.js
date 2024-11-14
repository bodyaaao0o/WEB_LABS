import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./style2.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Items from "./components/Items";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/items/:id" element={<Items />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
