import React from "react";
import PlantCard from "./PlantCard";
import Container from "@mui/material/Container";

function LandingPage() {
    return (
        <Container maxWidth="xl" style={{paddingTop: '80px'}}>
            <h1>LandingPage</h1>
            <PlantCard />
        </Container>
    );
}

export default LandingPage;