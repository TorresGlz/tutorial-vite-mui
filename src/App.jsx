//import { Button } from "@mui/material";
//import Button from "@mui/material/Button"; //Permite que los componentes cargen mas rapido si los importas de manera literal

import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function App() {
  return (
    <Container>
      <h1>App</h1>
      <Typography variant = "h3" color="primary">H3 titulo</Typography>
      <Button variant ="contained">Boton</Button>
    </Container>
  );
}
