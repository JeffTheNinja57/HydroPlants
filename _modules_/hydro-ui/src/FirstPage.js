import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function FirstPage() {
    const [isButtonPressed, setIsButtonPressed] = useState(false);
    const history = useHistory();

    function handleButtonClick() {
        setIsButtonPressed(true);
        // Redirect the user to the main page
        history.push('/main');
    }

    useEffect(() => {
        if (isButtonPressed) {
            // Make the button disappear
            document.querySelector('.btn').style.display = 'none';
        }
    }, [isButtonPressed]);

    return (
        <button
            type="button"
            onClick={handleButtonClick}
            disabled={isButtonPressed}
        >
            <Link to="/main">Main Page</Link>
        </button>
    );
}

export default FirstPage;
