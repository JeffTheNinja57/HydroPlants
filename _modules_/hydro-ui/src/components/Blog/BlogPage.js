import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import QuiltedImageList from "./ImageList";
import ControlledAccordions from "./Accordion";

function BlogPage() {
    return (
        <Container sx={{paddingTop: '80px'}}>
            <Typography variant="h3" component="h1" marginTop={3}>
                How to water your plants
            </Typography>
            <Box marginTop={3} sx={{display: "flex"}}>
                <img
                    alt="Falls"
                    src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2017/09/The-Dos-and-Donts-of-Watering-Plants.jpg"
                    height={325}
                />
                <QuiltedImageList/>
            </Box>
            <Box sx={{display: "flex"}}>
                <Typography variant="paragraph" component="p">
                    <p><strong>The Art and Science of Watering Plants</strong></p>

                    <p>Watering your plants may seem like a straightforward task, but it's an art and science that can make
                    or break the health and vitality of your green companions. Whether you're caring for a lush garden,
                    a collection of indoor potted plants, or a single bonsai on your windowsill, understanding the
                        principles of proper watering is essential.</p>

                    <p><strong>Why Proper Watering Matters</strong></p>

                    <p>Water is the lifeblood of plants. It's the vehicle for transporting nutrients from the soil to
                        all parts of the plant. Inadequate watering can lead to wilting, nutrient deficiency, and
                        stunted growth, while excessive watering can suffocate roots, promote disease, and cause root
                        rot. Striking the right balance is the key to success.</p>

                    <p><strong>Know Your Plants</strong></p>

                    <p>Different plants have different water requirements. Understanding the specific needs of your
                        plants is the first step in becoming a proficient plant parent. Succulents, for example, thrive
                        in well-draining soil and should be allowed to dry out between waterings. On the other hand,
                        ferns and tropical houseplants prefer consistently moist soil.</p>

                    <p>It's also important to consider the type of soil your plants are in. Soil composition can affect
                        water retention. Sandy soil drains quickly, while clayey soil retains moisture longer. Adjust
                        your watering frequency accordingly.</p>

                    <p><strong>Know Your Plants</strong></p>

                    <p>One of the simplest yet most effective methods for determining when to water your plants is the
                        finger test. Stick your finger about an inch into the soil. If it feels dry at that depth, it's
                        time to water. If it's still moist, hold off a bit longer. This hands-on approach allows you to
                        gauge the moisture level in the root zone, where it matters most.</p>

                    <p><strong>Watering Techniques</strong></p>

                    <p>When it comes to the actual act of watering, consider the method you use. For indoor potted
                        plants, it's best to water at the base of the plant near the roots. Overhead watering can lead
                        to wet foliage, increasing the risk of fungal diseases. A watering can with a long spout is
                        ideal for precision.</p>

                    <p>In the garden, soaker hoses and drip irrigation systems are valuable tools for efficient
                        watering. They deliver water directly to the root zone, minimizing wastage and promoting healthy
                        growth. If you must use a hose, water early in the morning to allow the leaves to dry during the
                        day, reducing the risk of disease.</p>

                    <p><strong>Signs of Overwatering and Underwatering</strong></p>

                    <p>Proper watering also involves being vigilant for signs of overwatering and underwatering.
                        Overwatered plants may exhibit wilting, yellowing leaves, and a musty odor from the soil. The
                        soil may feel waterlogged. Underwatered plants, on the other hand, may have dry, brittle leaves
                        and parched soil.</p>

                    <p>A good rule of thumb is to water deeply but less frequently. This encourages the plant's roots to
                        grow deeper, making them more resilient to drought. Allow the top inch or so of soil to dry out
                        between waterings for most plants. Always use pots with drainage holes to prevent excess water
                        from accumulating in the bottom.</p>

                    <p>In conclusion, watering your plants is a delicate balance between providing the essential
                        moisture they need and avoiding the pitfalls of overwatering. Understanding your plants'
                        specific needs, using the finger test, and employing the right watering techniques are the
                        foundation for successful plant care. As you hone your watering skills, you'll be rewarded with
                        thriving, vibrant plants that bring life and beauty to your home and garden.</p>
                </Typography>
            </Box>
            <Typography variant="h6" component="h4" marginBottom={3}>
                Frequently Asked Questions
            </Typography>
            <ControlledAccordions/>
        </Container>
    );
}

export default BlogPage;
