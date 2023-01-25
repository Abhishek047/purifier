import { Box, Container } from "@mui/material";

export const DesktopContainer = ({ children }) => {
    return (
        <Container maxWidth='xl'>
            <Box px={16}>{children}</Box>
        </Container>
    );
};
