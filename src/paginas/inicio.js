import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function PaginaInicio(){
    return (        
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        height="100vh"
        >
            <Typography variant="h3" component="h1" textAlign="center">
            Conheça os planetas do sistema solar
            </Typography>

            <img className="animacaoEfeitoFlutuando" src="/img/astronauta.png" alt="Astronauta flutuando" />
            <Link to="/planetas">
                <Button variant="contained" size="large" endIcon={<KeyboardDoubleArrowRightIcon />}> Vamos lá </Button>
            </Link>
        </Stack>
    );
}