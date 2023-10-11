import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Paper} from "@mui/material";

function PlantCard() {
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={4} sm={6} md={4}>
                    <Paper>
                        <h1>PlantCard</h1>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default PlantCard;