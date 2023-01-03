import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import barSvg from "../assets/bars.svg";

export default function TopBar() {
  // creatae a bar that displays /bars.svg in the left corner
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ paddingBottom: "25px", paddingTop: "15px" }}>
        <img
          alt="logo"
          className="headerImg"
          src={barSvg}
          style={{
            height: 13,
            width: 23,
          }}
        />
      </Container>
    </Box>
  );
}
