import { Box, Grid, Typography } from "@mui/material";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
    {
        name: "xyzsss",
        image: "https://firebasestorage.googleapis.com/v0/b/app-thoughts.appspot.com/o/project-test%2Finstallation.png?alt=media&token=17572990-fce3-4245-985e-6a50abfe642c",
        text: `I found '24X7 RO Service Center' around 2 years ago and after Technician visit I purchased a RO from Kent , since than I've never face any kind of issue. I'm delighted to have such a great RO service provider in my area. The Owner/Technician Mr. Ashish is really professional in his profession as well as a very good human being. I really appreciate his service and nature..`,
    },
    {
        name: "xyzsss",
        image: "https://firebasestorage.googleapis.com/v0/b/app-thoughts.appspot.com/o/project-test%2Finstallation.png?alt=media&token=17572990-fce3-4245-985e-6a50abfe642c",
        text: `I found '24X7 RO Service Center' around 2 years ago and after Technician visit I purchased a RO from Kent , since than I've never face any kind of issue. I'm delighted to have such a great RO service provider in my area. The Owner/Technician Mr. Ashish is really professional in his profession as well as a very good human being. I really appreciate his service and nature..`,
    },
    {
        name: "xyzsss",
        image: "https://firebasestorage.googleapis.com/v0/b/app-thoughts.appspot.com/o/project-test%2Finstallation.png?alt=media&token=17572990-fce3-4245-985e-6a50abfe642c",
        text: `I found '24X7 RO Service Center' around 2 years ago and after Technician visit I purchased a RO from Kent , since than I've never face any kind of issue. I'm delighted to have such a great RO service provider in my area. The Owner/Technician Mr. Ashish is really professional in his profession as well as a very good human being. I really appreciate his service and nature..`,
    },
];

export const Testimonials = () => {
    return (
        <Box>
            <Typography
                variant='h6'
                align='center'
                color='primary'
                gutterBottom
                sx={{ fontWeight: 600 }}>
                Our Testimonials
            </Typography>
            <Typography variant='h4' align='center' sx={{ fontWeight: 600 }} gutterBottom>
                What Our Client Are Saying
            </Typography>
            <Typography variant='body2' align='center' gutterBottom>
                These are the people who are connected with our service.
            </Typography>
            <Box mt={2} />
            <Grid container spacing={14}>
                {testimonials.map(({ name, image, text }, index) => (
                    <Grid key={name} item xs={12} sm={6} md={4}>
                        <TestimonialCard name={name} image={image} text={text} index={index} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
