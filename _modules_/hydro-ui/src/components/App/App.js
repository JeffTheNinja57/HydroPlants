import React from 'react';
import NavBar from "../NavBar/NavBar";
import LandingPage from "../LandingPage/LandingPage";
import MainPage from "../Dashboard/MainPage";
import BlogPage from "../Blog/BlogPage";
import { Route, Routes } from 'react-router-dom';
import NotFound from "../App/NotFound";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/Dashboard" element={<MainPage />} />
                <Route path="/landingpage" element={<LandingPage />} />
                <Route path="/Tutorials" element={<BlogPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
