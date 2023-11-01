import * as React from "react";
import {styled} from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/system";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: "0.9rem"}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
    const [value, setValue] = React.useState(0);
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box
            sx={{
                marginBottom: 10,
            }}
        >
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>How often should I water my indoor potted plants?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The frequency of watering your indoor potted plants can vary depending on the type of plant, the
                        size of the pot, and the environmental conditions in your home. Some plants, like succulents,
                        prefer to dry out completely between waterings, while others, like tropical houseplants, may
                        require more frequent watering. To determine the ideal watering schedule, it's important to
                        consider the specific needs of each plant species and monitor the moisture level in the soil.
                        Overwatering can be just as harmful as underwatering, so it's essential to strike the right
                        balance.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>What is the best method for watering outdoor garden plants?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Watering outdoor garden plants effectively is crucial for their health and growth. The best
                        method often depends on the type of garden and the plants you are growing. Generally, it's
                        recommended to water at the base of the plants rather than overhead to minimize the risk of
                        fungal diseases. Drip irrigation systems or soaker hoses can provide a consistent and efficient
                        way to deliver water directly to the roots. Additionally, watering in the morning is often
                        better than in the evening to allow the leaves to dry during the day, reducing the chances of
                        disease.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>How can I tell if my plants are getting too much or too little water?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Overwatering and underwatering are common issues for plant enthusiasts. Signs of overwatering
                        can include wilting, yellowing leaves, and a musty odor from the soil. On the other hand,
                        underwatered plants may have dry, brittle leaves and parched soil. To assess your plant's water
                        needs, perform the "finger test" by sticking your finger about an inch into the soil. If it
                        feels dry at that depth, it's time to water. However, if it still feels moist, it's best to wait
                        a bit longer. Observing your plants' overall health and adjusting your watering routine
                        accordingly is key to finding the right balance.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}