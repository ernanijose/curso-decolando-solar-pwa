import { createTheme } from "@mui/material";

const tema = createTheme({
    palette:{
        primary: {
            main: '#EDC229',
            contrastText: '#221C29',
        },
    },
    typography: {
        allVariants: {
            color: '#fff'
        }
    }
});

export default tema;