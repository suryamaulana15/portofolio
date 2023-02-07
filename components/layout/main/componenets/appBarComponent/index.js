import React, { Fragment, useState } from "react";
import {
  AppBar,
  Button,
  Box,
  Divider,
  Icon,
  IconButton,
  Slide,
  Toolbar,
  useColorScheme,
  useScrollTrigger,
  List,
  ListItem,
  ListItemButton,
  // ListItemIcon,
  ListItemText,
  Drawer,
} from "@mui/material";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import { Menu } from "@mui/icons-material";
import { useRouter } from "next/router";

import Image from "next/image";

import IGIcon from "../../../../../public/images/icon/ig.png";
import FBIcon from "../../../../../public/images/icon/fb.png";
import INIcon from "../../../../../public/images/icon/in.png";
import Logo from "../../../../../public/images/icon/logo_default.png";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ModeSwitcher() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null;
  }

  return (
    <IconButton
      sx={{
        color: "#238AE4",
        borderRadius: "10px",
        border: (thm) => `1px solid ${thm.palette.primary.main}`,
        padding: "3px",
      }}
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
    >
      {mode === "light" ? (
        <LightModeOutlinedIcon fontSize={"small"} />
      ) : (
        <DarkModeOutlinedIcon fontSize={"small"} />
      )}
    </IconButton>
  );
}

function AppBarComponent(props) {
  const { push } = useRouter();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key={"left"} disablePadding>
          <ListItemButton onClick={() => push("/")}>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>

        <ListItem key={"left"} disablePadding>
          <ListItemButton onClick={() => push("/portofolio")}>
            <ListItemText primary={"Portofolio"} />
          </ListItemButton>
        </ListItem>

        <ListItem key={"left"} disablePadding>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 3,
              pl: "16px",
              height: "42px",
            }}
          >
            <IconButton
              sx={{
                padding: 0,
              }}
            >
              <Icon>
                <Image src={IGIcon} alt={"ig-icon"} />
              </Icon>
            </IconButton>
            <IconButton
              sx={{
                padding: 0,
              }}
            >
              <Icon>
                <Image src={FBIcon} alt={"fb-icon"} />
              </Icon>
            </IconButton>
            <IconButton
              sx={{
                padding: 0,
              }}
            >
              <Icon>
                <Image src={INIcon} alt={"linkIN-icon"} />
              </Icon>
            </IconButton>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          {/*<Box*/}
          {/*  sx={{*/}
          {/*    display: { lg: "flex", xs: "none" },*/}
          {/*    flexDirection: "row",*/}
          {/*    justifyContent: "flex-end",*/}
          {/*    alignItems: "center",*/}
          {/*    padding: "8px 120px",*/}
          {/*    gap: 3,*/}
          {/*    height: "42px",*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <IconButton*/}
          {/*    sx={{*/}
          {/*      padding: 0,*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <Icon>*/}
          {/*      <Image src={IGIcon} alt={"ig-icon"} />*/}
          {/*    </Icon>*/}
          {/*  </IconButton>*/}
          {/*  <IconButton*/}
          {/*    sx={{*/}
          {/*      padding: 0,*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <Icon>*/}
          {/*      <Image src={FBIcon} alt={"fb-icon"} />*/}
          {/*    </Icon>*/}
          {/*  </IconButton>*/}
          {/*  <IconButton*/}
          {/*    sx={{*/}
          {/*      padding: 0,*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <Icon>*/}
          {/*      <Image src={INIcon} alt={"linkIN-icon"} />*/}
          {/*    </Icon>*/}
          {/*  </IconButton>*/}
          {/*  <Divider*/}
          {/*    orientation="vertical"*/}
          {/*    variant="middle"*/}
          {/*    flexItem*/}
          {/*    color={"#E0E0E0"}*/}
          {/*  />*/}
          {/*  <ModeSwitcher />*/}
          {/*</Box>*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: { xs: "8px", lg: "8px 120px" },
              gap: "24px",
              height: "64px",
            }}
          >
            <Image
              src={Logo}
              alt={"logo"}
              style={{ width: 80, height: "auto" }}
            />
            <Box
              sx={{
                display: { lg: "flex", xs: "none" },
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px",
                gap: "50px",
                height: "64px",
                textTransform: "none",
              }}
            >
              <Button color="inherit" onClick={() => push("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => push("/portofolio")}>
                Portfolio
              </Button>

              <Box
                sx={{
                  display: { lg: "flex", xs: "none" },
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                  height: "42px",
                }}
              >
                <IconButton
                  sx={{
                    padding: 0,
                  }}
                >
                  <Icon>
                    <Image src={IGIcon} alt={"ig-icon"} />
                  </Icon>
                </IconButton>
                <IconButton
                  sx={{
                    padding: 0,
                  }}
                >
                  <Icon>
                    <Image src={FBIcon} alt={"fb-icon"} />
                  </Icon>
                </IconButton>
                <IconButton
                  sx={{
                    padding: 0,
                  }}
                >
                  <Icon>
                    <Image src={INIcon} alt={"linkIN-icon"} />
                  </Icon>
                </IconButton>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  color={"#E0E0E0"}
                />
                <ModeSwitcher />
              </Box>
            </Box>
            <Box
              component={"div"}
              sx={{
                display: { lg: "none", sx: "inherit" },
              }}
            >
              <ModeSwitcher />
              <Button onClick={toggleDrawer("left", true)}>
                <Menu />
              </Button>
              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
            </Box>
          </Box>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Fragment>
  );
}

export default AppBarComponent;
