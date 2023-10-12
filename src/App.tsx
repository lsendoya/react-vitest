import { Grid } from "@chakra-ui/react";
import { Calculator } from "./Components";
import "./App.css";

function App() {
  return (
    <Grid w="100%" h="100vh" justifyContent={"center"}>
      <Calculator />
    </Grid>
  );
}

export default App;
