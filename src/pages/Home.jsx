import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import headerImage from "../assets/header.png";
import mapImage from "../assets/map.png";

const ButtonSX = {
  borderRadius: 15,
  background: "#E4B454",
};
const alignYCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Home() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      marginBottom="100px"
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <img alt="logo" className="headerImg" src={headerImage} />
      </Grid>
      <Grid item xs={12} marginBottom="">
        <Typography
          variant="arrow"
          component="h1"
          sx={{
            marginBottom: "25px",
          }}
        >
          Today
        </Typography>
        <Typography variant="regular" component="h2">
          <WbSunnyOutlinedIcon
            sx={{
              fontSize: "1.5rem",
              marginRight: "10px",
            }}
          />
          20°
        </Typography>
        <Typography variant="regular" component="h2">
          12:06AM, 2 JANUARY 2023
        </Typography>
        <Typography variant="regular" component="h2">
          Happy{" "}
          <span
            style={{
              color: "#E4B454",
              textDecoration: "underline",
              marginLeft: "5px",
            }}
          >
            Saturnalia and Solstice!
          </span>
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="arrow"
          component="h1"
          sx={{
            marginBottom: "10px",
          }}
        >
          News
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={9}>
            <Typography variant="regular" component="h2">
              1. Mr Pasta gained right to wear colander on his NID photo
              Installing FSM app makes you 200% more cool legally
            </Typography>
          </Grid>
          <Grid item xs={2} sx={alignYCenter}>
            <Button variant="contained" sx={ButtonSX}>
              READ
            </Button>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="regular" component="h2">
              2. Installing FSM app makes you 200% more cool legally
            </Typography>
          </Grid>
          <Grid item xs={2} sx={alignYCenter}>
            <Button variant="contained" sx={ButtonSX}>
              READ
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} marginBottom="">
        <Typography
          variant="arrow"
          component="h1"
          sx={{
            marginBottom: "10px",
          }}
        >
          Church and ministries
        </Typography>

        <Typography
          variant="regular"
          component="h2"
          sx={{
            color: "rgba(255, 255, 255, 0.78)",
          }}
        >
          Near You
        </Typography>
        <img
          alt="map"
          src={mapImage}
          width="100%"
          style={{
            marginBottom: "10px",
          }}
        />
        <Link
          href="/churches"
          sx={{
            color: "#E4B454",
            textDecoration: "none",
          }}
        >
          Check facilities
        </Link>
      </Grid>
    </Grid>
  );
}
