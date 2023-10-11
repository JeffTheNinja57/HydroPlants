import React from 'react';
import NavBar from '../NavBar/NavBar';
import PlantCard from "../LandingPage/PlantCard";

function MainPage() {
    return (
        <div className="MainPage" style={{paddingTop: '80px'}}>
            <h1>MainPage</h1>
            <PlantCard />
        </div>
    );
}

export default MainPage;
