import { Fragment } from "react";
import AppBarComponent from "@/components/layout/main/componenets/appBarComponent";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { FooterComponent } from "@/components/layout/main/componenets";

function Main({ children }) {
  return (
    <Fragment>
      <AppBarComponent />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "650px",
          }}
        >
          {children}
        </Box>
      </Box>
      <FooterComponent />
    </Fragment>
  );
}

export default Main;
