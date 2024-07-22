import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ComponenteLayoutPadrao from "../componentes/layout/padrao";
import ApiPlanetas from "../api/planetas";

export default function PaginaPlanetas() {
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [msg, setMsg] = useState(null);
  const [planetas, setPlanetas] = useState([]);

  //funcao que executa quando é aberta a pagina
  useEffect(() => {
    (async () => {
      try {
        let respostaApi = await ApiPlanetas.obterTodos();
        // console.log('abriu a pagina', respostaApi);
        setPlanetas(respostaApi);
        setMsg(null);
      } catch (error) {
        console.error('Erro ao obter planetas:', error);
        setErro({
            subtitulo: `Ocorreu um erro na nossa api para obter os planetas, tente novamente mais tarde!`,
            descricao: String(error),
        });
      } finally {
        setCarregando(false);
      }
    })();
  }, []);

//   useEffect(() => {
//     console.log("planetas ", planetas);
//   }, [planetas]);

  return (
    
      <ComponenteLayoutPadrao carregando={carregando} erro={erro} msg={msg}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            className="containerMargin"
          >
            Planetas do sistema solar!
          </Typography>
          <Grid container spacing={2} className="containerMargin">
            
          {planetas.map((planeta, i) => (
                <Grid key={i} item xs={6} sm={4} md={3} lg={2} xl={2}>
                <Card className="cardVidro">
                  <Link to={`/planeta/${planeta?.slug}`}>
                    <CardActionArea>
                      <CardContent>
                        <img src={planeta?.imgUrl} alt={planeta?.descrição} width="100%" />
                        <Typography variant="h5" component="h2">
                          { planeta?.nome }
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
          ))}
            
          </Grid>
        </Container>
      </ComponenteLayoutPadrao>
    
  );
}
