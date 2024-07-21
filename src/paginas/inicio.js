import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function PaginaInicio(){
    return (        
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        >
            <Typography variant="h2" component="h1">
            Conheça os planetas do sistema solar
            </Typography>

            <img class="efeito-flutuando" src="/img/astronauta.png" alt="Astronauta flutuando" />
            <Link to="/planetas">
            <Button variant="contained" size="large">Vamos lá!</Button>
            </Link>
        </Stack>
    );
}