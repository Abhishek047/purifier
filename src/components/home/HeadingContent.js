import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import sideImage from "../../assets/images/drinking-water.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Timer10SelectIcon from "@mui/icons-material/Timer10Select";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { HeadingCards } from "./HeadingCards";

// constants
const textContentBlock = {
    xs: 12,
    sm: 8,
    md: 7,
    lg: 7,
};
const imageContentBlock = {
    xs: 12,
    sm: 12 - textContentBlock.sm,
    md: 12 - textContentBlock.md,
    lg: 12 - textContentBlock.lg,
};
const cards = [
    {
        text: "24/7 Online Support",
        Icon: SupportAgentIcon,
    },
    {
        text: "10 years of experience",
        Icon: Timer10SelectIcon,
    },
    {
        text: "Professional technician",
        Icon: PrecisionManufacturingIcon,
    },
];
// constants

export const HeadingContent = () => {
    return (
        <>
            <Grid container>
                <Grid
                    item
                    xs={textContentBlock.xs}
                    sm={textContentBlock.sm}
                    md={textContentBlock.md}
                    lg={textContentBlock.lg}>
                    <Stack>
                        <Typography variant='h4' gutterBottom>
                            Success Experiences
                        </Typography>
                        <Box pr={4}>
                            <Typography variant='body2' gutterBottom>
                                We have over 10+ years of RO repair experience, and with our
                                experience within the industry we are confident to say that there
                                isn't much we haven't seen or repaired. When you call us to report a
                                faulty RO, you will be talking to our friendly office team who has
                                extensive knowledge of handling RO emergencies. In summer, we have
                                to store more water in comparison to other day. The more consumption
                                calls for more cleaning of water and it can show adverse impact on
                                your RO machines. RO Service Center is a one-stop place for
                                servicing your equipment at the convenience of your home.
                            </Typography>
                            <Typography variant='body2' gutterBottom>
                                Our maintenance and services for RO are dedicated to be performed
                                with use of genuine parts so there will be dignity to repair your RO
                                without compromising quality of work.
                            </Typography>
                            <Typography variant='body2' gutterBottom>
                                With a remarkably trained group of technicians, we have been
                                providing services in Bangalore . If you are looking for RO service
                                centre in Telangana or service in east, west, south, north Delhi NCR
                                you may connect with us. Sometimes you are not able to get through
                                service center number. You may faith on us for all your RO Service
                                support
                            </Typography>
                            <Typography variant='body2' gutterBottom>
                                For instant connect you can dial our all time available contact
                                number <strong>18004191223 </strong>. In case, you find any problem
                                after getting our services, you will get instant assistance for
                                resolution of the concern.
                            </Typography>
                        </Box>
                        <Box mt={2}>
                            <Button variant='text' endIcon={<KeyboardArrowRightIcon />}>
                                View more
                            </Button>
                        </Box>
                        <Box mt={2}>
                            <Stack spacing={2} direction={"row"}>
                                {cards.map((card, index) => (
                                    <HeadingCards
                                        key={index}
                                        icon={
                                            <card.Icon sx={{ fontSize: "2.5em" }} color='ternary' />
                                        }
                                        text={card.text}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={imageContentBlock.xs}
                    sm={imageContentBlock.sm}
                    md={imageContentBlock.md}
                    lg={imageContentBlock.lg}>
                    <Stack justifyContent={"center"} alignItems='center'>
                        <img src={sideImage} alt='drinking-water' height='auto' width='300px' />
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};
