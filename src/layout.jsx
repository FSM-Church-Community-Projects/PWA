import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/system";
import Navigation from "./components/navigation";
import TopBar from "./components/TopBar";
import arrow from "./assets/arrow.svg";

// Define the styles
const NavigationActionRoot = {
  paddingBottom: 20,
  "&.Mui-selected": {
    color: "white",
  },
  "& .MuiSvgIcon-root": {
    padding: "5px 20px 5px 20px",
    margin: 5,
    borderRadius: 15,
  },
  "&.Mui-selected .MuiSvgIcon-root": {
    background: "#E4B454",
  },
};
const BottomNavigationRoot = {
  zIndex: 100,
  height: 100,
  position: "fixed",
  bottom: 0,
  width: "100%",
  background: "rgba(0, 0, 0, 0.6)",
};
const TypographyVariantArrow = {
  props: { variant: "arrow" },
  style: {
    color: "white",
    fontSize: "1.3rem",
    "&::after": {
      content: `url("${arrow}")`,
      marginLeft: 16,
      color: "#E4B454",
      verticalAlign: "middle",
    },
  },
};
const TypographyVariantRegular = {
  props: { variant: "regular" },
  style: {
    fontWeight: "normal",
    display: "flex",
    fontSize: "1rem",
    marginBottom: "1rem",
    alignItems: "center",
  },
};

export default function Layout(props) {
  const theme = createTheme({
    components: {
      MuiBottomNavigationAction: {
        styleOverrides: { root: NavigationActionRoot },
      },
      MuiBottomNavigation: {
        styleOverrides: { root: BottomNavigationRoot },
      },
      MuiTypography: {
        styleOverrides: { root: { color: "white" } },
        variants: [TypographyVariantArrow, TypographyVariantRegular],
      },
    },
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <Navigation />
      <Container>{props.children}</Container>
    </ThemeProvider>
  );
}
