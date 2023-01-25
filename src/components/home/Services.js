import { Box, Button, Grid, Paper, styled, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const cardContent = [
    {
        title: "RO System",
        image: "https://firebasestorage.googleapis.com/v0/b/app-thoughts.appspot.com/o/project-test%2Finstallation.png?alt=media&token=17572990-fce3-4245-985e-6a50abfe642c",
        text: "RO systems greatly improve the quality of water, making it healthy and safe to drink. They can be used in residential, commercial and industrial applications.",
    },
    {
        title: "Water purification services",
        image: "https://firebasestorage.googleapis.com/v0/b/app-thoughts.appspot.com/o/project-test%2Finstallation.png?alt=media&token=17572990-fce3-4245-985e-6a50abfe642c",
        text: "If the municipal corporation water supply contains microorganisms and the TDS level of the water is low then having UV water purifier is the best option.",
    },
    {
        title: "RO Installation",
        image: "https://firebasestorage.googleapis.com/v0/b/app-thoughts.appspot.com/o/project-test%2Finstallation.png?alt=media&token=17572990-fce3-4245-985e-6a50abfe642c",
        text: "Before installing a water purifier, he has to follow the proper water purifier installation guideMost of the reputed RO installation companies arrange some special training.",
    },
    {
        title: "RO AMC Plan",
        image: "https://firebasestorage.googleapis.com/v0/b/app-thoughts.appspot.com/o/project-test%2Finstallation.png?alt=media&token=17572990-fce3-4245-985e-6a50abfe642c",
        text: "AMC stands for Annual Maintenance Contract. This is a yearly maintenance contract for water purifiers which is generally known as an Annual Maintenance Contract or AMC for short.",
    },
    {
        title: "Industrial RO Plant",
        image: "https://firebasestorage.googleapis.com/v0/b/app-thoughts.appspot.com/o/project-test%2Finstallation.png?alt=media&token=17572990-fce3-4245-985e-6a50abfe642c",
        text: "This is reverse osmosis process, which is the natural movement of solvent from an area of low solute concentration, through a membrane, to an area of high solute concentration.",
    },
    {
        title: "Highly Professional staff",
        image: "https://firebasestorage.googleapis.com/v0/b/app-thoughts.appspot.com/o/project-test%2Finstallation.png?alt=media&token=17572990-fce3-4245-985e-6a50abfe642c",
        text: "A professional employee is a person who works in a field of specialty that requires advanced education or training. Professional employees the best product from a range of products!",
    },
];

export const Services = () => {
    return (
        <Box>
            <Box maxWidth={"600px"} mb={6}>
                <Typography variant='h6' gutterBottom color='primary' sx={{ fontWeight: 600 }}>
                    What we do?
                </Typography>
                <Typography variant='h5' gutterBottom sx={{ fontWeight: 600 }}>
                    We're Provided Best RO Water Purifier Repair And Services!
                </Typography>
                <Typography variant='body2' gutterBottom>
                    Millions of families across Delhi NCR have benefited from safe and healthy
                    drinking water by using 24X7 RO Service Center for more than 10 years.{" "}
                </Typography>
            </Box>

            <Grid container spacing={5}>
                {cardContent.map(({ text, image, title }) => (
                    <Grid key={title} item xs={12} sm={6} md={6} lg={4}>
                        <ServiceCards text={text} image={image} title={title} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
// Helping sections
const CardContainer = styled(Paper)(({ theme }) => ({
    minWidth: 200,
    overflow: "hidden",
}));
const ImageContainer = styled(Box)(({ theme }) => ({
    height: 210,
    width: "100%",
    overflow: "hidden",
}));
const CardContent = styled(Box)(({ theme }) => ({
    margin: "12px 0",
    padding: "12px",
}));
const NewButton = styled(Button)(({ theme }) => ({
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
    },
}));

function ServiceCards({ image, text, title }) {
    return (
        <CardContainer elevation={3}>
            <ImageContainer>
                <img src={image} alt={title} width='100%' height='auto' />
            </ImageContainer>
            <CardContent>
                <Typography variant='h6' color='secondary' gutterBottom sx={{ fontWeight: 600 }}>
                    {title}
                </Typography>
                <Typography variant='body2' gutterBottom>
                    {text}
                </Typography>
                <Box mt={2}>
                    <NewButton variant='outlined' endIcon={<ArrowForwardIcon />}>
                        View more
                    </NewButton>
                </Box>
            </CardContent>
        </CardContainer>
    );
}
