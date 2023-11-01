import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import image from "./IMG_8196.png"

function LandingPage() {
    return (
        <Container
            maxWidth="xl"
            style={{ paddingTop: '80px' }}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh', // Ensures that the container takes the full height of the viewport
            }}
        >
            <img src={image} alt="woman planting plant" />
            <Typography variant="h1" component="h2">
                Welcome
            </Typography>
            <Typography variant="h5" component="h3" mt={3}>
                Make your home greener with healthy plants
            </Typography>
        </Container>

    );
}

export default LandingPage;