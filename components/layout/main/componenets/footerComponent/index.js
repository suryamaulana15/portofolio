import React from "react";
import { Button, Icon, IconButton, Typography, Box } from "@mui/material";
import Logo from "../../../../../public/images/icon/Logo.png";
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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton>
          <Image src={Logo} alt={"logo"} />
        </IconButton>
        <Box sx={{ display: { lg: "inherit", xs: "none" } }}>
          <IconButton>
            <Icon>
              <Image src={IGIcon} alt={"ig-icon"} />
            </Icon>
          </IconButton>
          <IconButton>
            <Icon>
              <Image src={FBIcon} alt={"fb-icon"} />
            </Icon>
          </IconButton>
          <IconButton>
            <Icon>
              <Image src={INIcon} alt={"linkIN-icon"} />
            </Icon>
          </IconButton>
        </Box>
      </Box>

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
        <Button color="inherit" onClick={() => push("/portofolio")}>
          Blog
        </Button>
        <Button color="inherit" onClick={() => push("/portofolio")}>
          Course
        </Button>
      </Box>

      <Box sx={{ display: { lg: "none", xs: "inherit" } }}>
        <IconButton>
          <Icon>
            <Image src={IGIcon} alt={"ig-icon"} />
          </Icon>
        </IconButton>
        <IconButton>
          <Icon>
            <Image src={FBIcon} alt={"fb-icon"} />
          </Icon>
        </IconButton>
        <IconButton>
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
