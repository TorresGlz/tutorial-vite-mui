//import { Button } from "@mui/material";
//import Button from "@mui/material/Button"; //Permite que los componentes cargen mas rapido si los importas de manera literal

import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function App() {
  return (
    <Container>
      <h1>App</h1>
      <Box
        sx={{
          border: 3,
          p: 5,
          borderColor: "peru",
          bgcolor: "#111",
          color: "white",
        }}
        component = "span"
      >
        Pero que hermoso es MUI
      </Box>
    </Container>
  );
}
