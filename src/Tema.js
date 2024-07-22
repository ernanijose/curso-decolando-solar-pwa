import { createTheme } from "@mui/material";

const tema = createTheme({
    palette:{
        primary: {
            main: '#EDC229',
            contrastText: '#221C29',
        },
        white:{
            main: '#fff'
        },
    },
    typography: {
        allVariants: {
            color: '#fff'
        }
    }
});

export default tema;