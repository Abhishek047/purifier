import { Box, Grid, Stack, styled, Typography, useTheme } from "@mui/material";
import { DesktopContainer } from "../common-styled-components";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const serviceProvider = ["Delhi", "Noida", "Ghaziabad", "Gurgaon", "Faridabad"];
const contact = ["18004191223"];
const quickLinks = [
    "About Us",
    "Services",
    "RO/UV Products",
    "AMC Plan",
    "Pricing",
    "Contact Us",
    "Gallery",
    "FAQ",
    "Reviews",
    "Locations",
    "Terms",
    "Policy",
];

const footerSection = [
    {
        heading: "Quick Links",
        children: [quickLinks.slice(0, 6), quickLinks.slice(6, 12)],
        Icon: KeyboardDoubleArrowRightIcon,
    },
    {
        heading: "Service provider",
        children: [serviceProvider],
        Icon: LocationOnIcon,
    },
    {
        heading: "Contact us",
        children: [contact],
        Icon: PhoneIcon,
    },
];
const FooterContainer = styled(Box)(({ theme }) => ({
    marginTop: "-30px",
    paddingBottom: "40px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
}));
const Links = styled(Typography)(({ theme }) => ({
    margin: "4px 0",
    fontSize: "0.8em",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    ":hover": {
        color: theme.palette.primary.main,
        "> p": {
            color: theme.palette.primary.main,
        },
    },
}));

const Heading = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: "1.4em",
    marginBottom: "32px",
    position: "relative",
    "::before": {
        position: "absolute",
        content: "''",
        bottom: "-8px",
        left: 0,
        height: "3px",
        width: "50%",
        backgroundColor: theme.palette.primary.main,
        borderRadius: 10,
        zIndex: 1,
    },
}));

export const Footer = () => {
    const theme = useTheme();
    return (
        <div>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path
                    fill={`${theme.palette.secondary.main}`}
                    fill-opacity='1'
                    d='M0,224L120,197.3C240,171,480,117,720,106.7C960,96,1200,128,1320,144L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'></path>
            </svg>
            <FooterContainer>
                <DesktopContainer>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Stack>
                                <Box>LOGO</Box>
                                <Typography variant='subtitle2'>
                                    24x7 RO Center All over Delhi NCR We, RO Center are trusted as a
                                    trusted manufacturer and trader. All types of domestic RO water
                                    purifiers and water purifier spares are available in our product
                                    line and we provide door to door water purifier service We have
                                    been serving people since 10 years
                                </Typography>
                            </Stack>
                        </Grid>
                        {footerSection.map((section) => (
                            <Grid item xs={12} sm={6} lg={3}>
                                <Stack>
                                    <Heading>{section.heading}</Heading>
                                    <Stack spacing={2} direction='row'>
                                        {section.children.map((child) => (
                                            <Box>
                                                {child.map((name) => (
                                                    <Links>
                                                        <section.Icon
                                                            sx={{
                                                                marginRight: "4px",
                                                                color: "inherit",
                                                                fontSize: "inherit",
                                                            }}
                                                        />
                                                        <Typography
                                                            component='p'
                                                            color={"inherit"}
                                                            fontSize='inherit'>
                                                            {name}
                                                        </Typography>
                                                    </Links>
                                                ))}
                                            </Box>
                                        ))}
                                    </Stack>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </DesktopContainer>
            </FooterContainer>
        </div>
    );
};
