import * as React from "react";
//import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      sx={{
        "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
          color: "#ddd",
        },
        "& .Mui-selected, .Mui-selected > svg": {
          color: "#fff",
        },
      }}
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "rgba(0, 0, 0, 0.56)",
      }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Calendar" icon={<CalendarMonthIcon />} />
      <BottomNavigationAction label="Sermons" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Community" icon={<PeopleIcon />} />
    </BottomNavigation>
  );
}
