import CallIcon from "@mui/icons-material/Call";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Button, Grid, Stack, styled, Typography } from "@mui/material";
import { DesktopContainer } from "../common-styled-components";

const Container = styled(Box)((theme) => ({
    background: "radial-gradient(circle, rgba(244,250,255,1) 17%, rgba(212,248,255,1) 100%)",
}));

const GridContainer = styled(Grid)((theme) => ({
    minHeight: 350,
    padding: "48px 0",
}));

export const Banner = () => {
    return (
        <Container>
            <DesktopContainer>
                <GridContainer container alignItems={"center"}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Box>
                            <Stack justifyContent='center'>
                                <Typography variant='h3'>
                                    Drink easy with <br />
                                    chemical free <br />
                                    engineering
                                </Typography>
                                <Box mt={2}>
                                    <Stack
                                        spacing={2}
                                        direction={"row"}
                                        justifyContent='flex-start'>
                                        <Button variant='contained' endIcon={<CallIcon />}>
                                            Contact us
                                        </Button>
                                        <Button variant='outlined' endIcon={<InfoOutlinedIcon />}>
                                            About us
                                        </Button>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={7}>
                        <Box ml={2}>
                            <img
                                alt='purifiers'
                                src='https://firebasestorage.googleapis.com/v0/b/app-thoughts.appspot.com/o/project-test%2FWater-Purifier-PNG-Clipart.png?alt=media&token=697e800b-68f2-4e02-af8e-42bd956e77ff'
                                sx={{
                                    maxHeight: "350px",
                                    height: "auto",
                                }}
                                width='100%'
                            />
                        </Box>
                    </Grid>
                </GridContainer>
            </DesktopContainer>
        </Container>
    );
};
