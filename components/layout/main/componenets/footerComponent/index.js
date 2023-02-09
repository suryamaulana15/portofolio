import React from "react";
import { Button, Icon, IconButton, Typography, Box } from "@mui/material";
import Logo from "../../../../../public/images/icon/logo_default.png";
import IGIcon from "../../../../../public/images/icon/ig.png";
import FBIcon from "../../../../../public/images/icon/fb.png";
import INIcon from "../../../../../public/images/icon/in.png";
import Image from "next/image";
import { useRouter } from "next/router";

function FooterComponent() {
  const { push } = useRouter();

  return (
    <Box
      component={"footer"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pl: { lg: "120px", xs: 1 },
        pr: { lg: "120px", xs: 1 },
        gap: 1,
        mb: "50px",
        // minHeight: 600
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", lg: "center" },
        }}
      >
        <IconButton>
          <Image
            src={Logo}
            alt={"logo"}
            style={{ width: 80, height: "auto", cursor: "pointer" }}
            onClick={() => push("/")}
          />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: { xs: "flex-start", lg: "flex-end" },
              alignItems: { xs: "flex-start", lg: "center" },
              gap: { xs: 0, lg: 3 },
              height: { lg: "42px" },
            }}
          >
            <Button color="inherit" onClick={() => push("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => push("/portofolio")}>
              Portfolio
            </Button>
          </Box>
          <Box sx={{ display: { lg: "inherit", xs: "none" } }}>
            <IconButton
              onClick={() =>
                window.open(
                  "https://www.instagram.com/suryamaulana_15",
                  "_blank"
                )
              }
            >
              <Icon>
                <Image src={IGIcon} alt={"ig-icon"} />
              </Icon>
            </IconButton>
            <IconButton
              onClick={() =>
                window.open(
                  "https://www.facebook.com/surya.maulana.39",
                  "_blank"
                )
              }
            >
              <Icon>
                <Image src={FBIcon} alt={"fb-icon"} />
              </Icon>
            </IconButton>
            <IconButton
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/surya-maulana-412188190",
                  "_blank"
                )
              }
            >
              <Icon>
                <Image src={INIcon} alt={"linkIN-icon"} />
              </Icon>
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/*<Box*/}
      {/*  sx={{*/}
      {/*    display: "flex",*/}
      {/*    flexDirection: { xs: "column", lg: "row" },*/}
      {/*    justifyContent: { xs: "flex-start", lg: "flex-end" },*/}
      {/*    alignItems: { xs: "flex-start", lg: "center" },*/}
      {/*    gap: { xs: 0, lg: 3 },*/}
      {/*    height: { lg: "42px" },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Button color="inherit" onClick={() => push("/")}>*/}
      {/*    Home*/}
      {/*  </Button>*/}
      {/*  <Button color="inherit" onClick={() => push("/portofolio")}>*/}
      {/*    Portfolio*/}
      {/*  </Button>*/}
      {/*</Box>*/}

      <Box sx={{ display: { lg: "none", xs: "inherit" } }}>
        <IconButton
          onClick={() =>
            window.open("https://www.instagram.com/suryamaulana_15", "_blank")
          }
        >
          <Icon>
            <Image src={IGIcon} alt={"ig-icon"} />
          </Icon>
        </IconButton>
        <IconButton
          onClick={() =>
            window.open("https://www.facebook.com/surya.maulana.39", "_blank")
          }
        >
          <Icon>
            <Image src={FBIcon} alt={"fb-icon"} />
          </Icon>
        </IconButton>
        <IconButton
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/surya-maulana-412188190",
              "_blank"
            )
          }
        >
          <Icon>
            <Image src={INIcon} alt={"linkIN-icon"} />
          </Icon>
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: { xs: "center", lg: "flex-end" },
          alignItems: "center",
          gap: 3,
          // height: '42px',
        }}
      >
        <Typography
          color={(theme) => theme.palette.text.secondary}
          fontSize={12}
        >
          © Surya Maulana. 2023, Jakarta. All rights reserved
        </Typography>
      </Box>
    </Box>
  );
}

export default FooterComponent;
