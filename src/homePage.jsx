import NavBar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
// import "fontsource-roboto";
import { Paper} from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "3rem"
    }
  },
  palette: {

    primary: {
      main: green[600]
    },
    secondary: {
      main: orange[400]
    }
  }
});

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Paper style={{ height: "200vh" }}> */}
        {/* <Container> */}
          <NavBar />
        {/* </Container> */}
      {/* </Paper> */}
    </ThemeProvider>
  );
}

export default HomePage;
