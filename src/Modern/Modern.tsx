import React from "react";
import { Container, Box, Stack, Grid } from "@mui/material";
import Cardmain from "../Components/Cardmain";
import Cardchard from "./CardComponent/Cardchard";
import Cartchard1 from "./CardComponent/Cartchard1";
import Cardchard2 from "./CardComponent/Cardchard2";
import Cardchard3 from "./CardComponent/Cardchard3";

function Modern() {
  return (
    <Container
  disableGutters
  maxWidth={false}
  sx={{
    width: '100vw',
    maxWidth: '100%',
    padding: 0,
    margin: 0,
  }}
>
  <Box sx={{ width: '100%', py: 1 }}>
    <Cardmain />
    <Grid container spacing={3} sx={{ mt: 3, justifyContent: "center" }}>
      <Grid item xs={12} md={6} >
        <Cardchard />
      </Grid>
      <Grid item xs={12} md={6}>
        <Cardchard2 />
      </Grid>
      <Grid item xs={12} md={6} lg={6} xl={6}>
        <Cardchard3 />
      </Grid>
    </Grid>
  </Box>
</Container>

  

  );
}

export default Modern;
