import Box from "@mui/material/Box";
import { Container } from "@mui/system";

export default function TopBar() {
  // creatae a bar that displays /bars.svg in the left corner
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container
        sx={{ paddingBottom: "25px", paddingTop: "25px", paddingLeft: "25px" }}
      >
        <img
          alt="logo"
          className="headerImg"
          src="/bars.svg"
          style={{
            height: 13,
            width: 23,
          }}
        />
      </Container>
    </Box>
  );
}
