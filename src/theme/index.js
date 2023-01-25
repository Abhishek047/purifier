import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#00ABE4",
        },
        secondary: {
            main: "#01257D",
        },
        ternary: {
            main: "#FF7000",
            contrastText: "#FFF",
        },
    },
    shape: {
        borderRadius: 4,
    },
    typography: {
        fontFamily: ["Montserrat", "Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
        body2: {
            color: "#828893",
            fontSize: "0.91rem",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    fontSize: "0.9em",
                    fontWeight: 500,
                    color:
                        ownerState.color === "primary" && ownerState.variant === "contained"
                            ? "white"
                            : ownerState.color,
                }),
            },
        },
    },
});
