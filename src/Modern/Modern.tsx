import { Container, Box } from "@mui/material";
import Cardmain from "../Components/Cardmain";
import Cardchard from "./CardComponent/Cardchard";
import Cardchard2 from "./CardComponent/Cardchard2";
import Cardchard3 from "./CardComponent/Cardchard3";
import { Grid } from "@mui/material"; // ✅

interface ProgressCardProps {
  title: string;
  amount: string;
  percentage: number;
}
function Modern({ title, amount, percentage }: ProgressCardProps) {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        width: "100vw",
        maxWidth: "100%",
        padding: 0,
        margin: 0,
      }}
    >
      <Box sx={{ width: "100%", py: 1 }}>
        <Cardmain />
        <Grid container spacing={3} sx={{ mt: 3, justifyContent: "center" }}>
          <Grid item xs={12} md={6}>
            <Cardchard />
          </Grid>
          <Grid item xs={12} md={6}>
            <Cardchard2 title="ยอดขายวันนี้" amount="฿25,000" percentage={40} />
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
