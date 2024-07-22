import { Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function PaginaPlanetas(){
    return (
        <Container maxWidth="lg">
            <Typography variant="h2" component="h1" textAlign="center" className="containerMargin">
                Planetas do sistema solar!
            </Typography>
            <Grid container spacing={2} className="containerMargin">
                <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
                    <Card className="cardVidro">
                        <Link to="/planeta/test">
                            <CardActionArea>
                                <CardContent>
                                    <img src="" alt="" width="100%" />
                                    <Typography variant="h5" component="h2">Terra</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
                
            </Grid>
        </Container>

    );
}