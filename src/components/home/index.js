import { Box, styled } from "@mui/material";
import { DesktopContainer, Spacing } from "../common-styled-components";
import { Banner } from "./Banner";
import { CounterSection } from "./CounterSection";
import { FormSection } from "./FormSection";
import { HeadingContent } from "./HeadingContent";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";

const spacing = 8;

const CounterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    padding: "48px 0",
}));

const ContactContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.ternary.main,
    padding: "48px 0",
}));

export const Home = () => {
    return (
        <div>
            <Banner />
            <DesktopContainer>
                <Spacing mt={spacing} />
                <HeadingContent />
                <Spacing mt={spacing} />
            </DesktopContainer>
            <CounterContainer>
                <DesktopContainer>
                    <CounterSection />
                </DesktopContainer>
            </CounterContainer>
            <Spacing mt={spacing} />
            <DesktopContainer>
                <Services />
            </DesktopContainer>
            <Spacing mt={spacing} />
            <ContactContainer>
                <DesktopContainer>
                    <FormSection />
                </DesktopContainer>
            </ContactContainer>
            <DesktopContainer>
                <Spacing mt={spacing} />
                <Testimonials />
            </DesktopContainer>
        </div>
    );
};
