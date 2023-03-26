import {createTheme} from "@mui/material";

const mainTheme = createTheme({
    palette: {
        text: {
            primary: "#1f2a4b",
        },
        primary: {
            main: "#4a77e5"
        }
    },
    typography: {
        fontFamily: ['MarkPro', 'sans-serif'].join(',')
    }
});

mainTheme.typography.h1 = {
    fontSize: "1.375rem",
    lineHeight: "1.75rem",
    fontWeight: "bold"
};
mainTheme.typography.h2 = {
    fontSize: "1rem",
    lineHeight: "1.25rem",
    fontWeight: "normal",
    color: "#a1a4ad",
};
mainTheme.typography.h5 = {
    fontSize: "0.875rem",
    lineHeight: "1.125rem",
    fontWeight: "normal",
};
mainTheme.typography.h6 = {
    fontSize: "0.875rem",
    lineHeight: "1.125rem",
    fontWeight: "bold",
    color: "rgba(31, 42, 75, 0.59)",
};
mainTheme.typography.button = {
    fontSize: "1rem",
    lineHeight: "1.25rem",
    fontWeight: "normal"
};

export default mainTheme;