import React from 'react';
import NavBar from "../NavBar/NavBar";
import PlantCard from "../LandingPage/PlantCard";
import LandingPage from "../LandingPage/LandingPage";
import MainPage from "../Dashboard/MainPage";
import BlogPage from "../Blog/BlogPage";
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/Dashboard" element={<MainPage />} />
                <Route path="/landingpage" element={<LandingPage />} />
                <Route path="/Blog" element={<BlogPage />} />
            </Routes>
        </div>
    );
}

export default App;
