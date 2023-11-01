import React from 'react';
import Grid from '@mui/material/Grid';
import PlantCard from "../LandingPage/PlantCard";
import Container from "@mui/material/Container";

function MainPage() {
    return (
        <Container style={{paddingTop: '80px'}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <PlantCard />
                </Grid>
                <Grid item xs={4}>
                    <PlantCard />
                </Grid>
            </Grid>
        </Container>
    );
}

export default MainPage;
