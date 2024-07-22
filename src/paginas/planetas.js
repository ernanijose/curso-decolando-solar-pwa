import { Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function PaginaPlanetas(){
    return (
        <Container maxWidth="lg">
            <Typography variant="h2" component="h1" textAlign="center" pt={2}>
                Planetas do sistema solar!
            </Typography>
            <Grid container spacing={2} pt={2}>
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