import { Grid } from "@chakra-ui/react";
import "./App.css";
import { Calculator } from "./Components";

function App() {
  return (
    <Grid minW="3xl" h={"100vh"}   justifyContent={"center"}>
      <Calculator />
    </Grid>
  );
}

export default App;
