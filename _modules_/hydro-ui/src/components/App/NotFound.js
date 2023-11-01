import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <Container sx={{paddingTop: '80px'}}>
            <h1>Not found</h1>
            <Link to="/landingpage">
                <Button>
                    Go back home
                </Button>
            </Link>
        </Container>
    );
}

export default NotFound;