import { Button, Container, Grid, Typography } from "@mui/material";

export default function App() {
  return (
    <Container>
      <Grid container spacing = {5}>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, id?
            Quia aliquam alias, eius accusantium delectus eveniet ab omnis hic?
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, id?
            Quia aliquam alias, eius accusantium delectus eveniet ab omnis hic?
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, id?
            Quia aliquam alias, eius accusantium delectus eveniet ab omnis hic?
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
