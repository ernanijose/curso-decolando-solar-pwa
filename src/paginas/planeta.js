import { Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShareIcon from '@mui/icons-material/Share';

export default function PaginaPlaneta(){
    function clickCompartilhar(){
        window.navigator.share({
            url: `${window.location.href}`,
            text: `Explore o planeta NOM DO PLANETA e descubra suas peculiaridades`,
            title: `Conheça NOME`
        });
    }

    return (
        <Container maxWidth="xl" className="containerMargin">
            <Link to="/planetas">
                <Button variant="outlined" size="large"><ArrowBackIosIcon /> Voltar</Button>
            </Link>
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >
                <img className="animacaoEfeitoGirar" src="" alt="" />
                <Typography variant="h5" component="h1">
                    Terra
                </Typography>

                <Typography variant="body1" component="p">
                    Descrição do planeta Terra
                </Typography>

                <Button variant="contained" size="large" onClick={() => { clickCompartilhar();}}><ShareIcon /> Compartilhar</Button>
            </Stack>
            
        </Container>
    );
}