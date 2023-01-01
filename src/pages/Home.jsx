import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img className="headerImg" src="/header.png" />
      </Grid>
    </Grid>
  );
}
