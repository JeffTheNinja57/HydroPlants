import React from 'react';
import {Paper} from "@mui/material";
import Container from "@mui/material/Container";
import NavBar from "../NavBar/NavBar";


function App() {

    return (
        <div className="App">
            <NavBar/>
            <Container maxWidth="xm">
                <Paper elevation={3}>
                    <h1>Hello World!</h1>
                </Paper>
            </Container>
        </div>
    );
}

export default App;

