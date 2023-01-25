import { Box, Stack, styled, Typography } from "@mui/material";

const CardContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#fafafa",
    textAlign: "center",
    boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    position: "relative",
    zIndex: 2,
    borderRadius: 5,
    "& ::before": {
        position: "absolute",
        content: "''",
        top: 0,
        left: 0,
        height: "2px",
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        zIndex: 1,
    },
}));

const Text = styled(Typography)(({ theme }) => ({
    fontSize: "min(4vw, 1em)",
    fontWeight: 700,
}));

export const HeadingCards = ({ icon, text }) => {
    return (
        <CardContainer p={2}>
            <Stack alignItems={"center"} justifyContent='center'>
                <Box mb={2}>{icon}</Box>
                <Text variant='subtitle2'>{text}</Text>
            </Stack>
        </CardContainer>
    );
};
