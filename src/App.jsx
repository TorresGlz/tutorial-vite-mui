//import { Button } from "@mui/material";
//import Button from "@mui/material/Button"; //Permite que los componentes cargen mas rapido si los importas de manera literal

import { Button, Container, Typography } from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import AirIcon from '@mui/icons-material/Air';

export default function App() {
  return (
    <Container>
      <h1>App</h1>
      <Typography variant="h3" color="primary">
        H3 titulo
      </Typography>
      <Button variant="outlined" color="error" startIcon={<AgricultureIcon/>}>
        Boton
      </Button>
      <Button variant="contained" color="success" endIcon={<AirIcon/>}>
        Boton
      </Button>
    </Container>
  );
}
