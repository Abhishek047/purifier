import { Grid, Paper, Stack, styled, Typography } from "@mui/material";
import CountUp from "react-countup";

const cards = [
    {
        name: "Projects completed",
        value: 2500,
    },
    {
        name: "Experienced technician",
        value: 140,
    },
    {
        name: "Happy customer",
        value: 2400,
    },
    {
        name: "Branch location",
        value: 7,
    },
];

const Counter = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    fontSize: "2.7em",
    marginBottom: "8px",
    fontWeight: 700,
    color: theme.palette.primary.main,
    // "& >span": {
    // },
}));

const Card = styled(Paper)(({ theme }) => ({
    width: 230,
    margin: "0 auto",
    boxShadow: "0 0 40px rgba(0, 0, 0, 0.4)",
    padding: 12,
}));

export const CounterSection = () => {
    return (
        <div>
            <Stack alignItems={"center"} justifyContent='center'>
                <Typography variant='h6' sx={{ marginBottom: "24px", color: "#fafafa" }}>
                    Best RO Water Purifier Service Center
                </Typography>
                <Typography
                    variant='h4'
                    sx={{ marginBottom: "32px", fontWeight: 600, color: "#fafafa" }}>
                    We Completed 2500+ Projects Annually
                </Typography>
            </Stack>
            <Grid container justifyContent={"center"} alignItems={"center"} spacing={2}>
                {cards.map((card) => (
                    <Grid key={card.value} item xs={12} sm={6} md={6} lg={3}>
                        <Card>
                            <Stack>
                                <Counter>
                                    <CountUp start={0} end={card.value} enableScrollSpy />
                                </Counter>
                                <Typography sx={{ textAlign: "center" }} variant='subtitle1'>
                                    <strong>{card.name}</strong>
                                </Typography>
                            </Stack>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
