import {
  Box,
  Icon,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import profile from "public/images/profile3.jpg";
import Image from "next/image";
import IGIcon from "@/public/images/icon/ig.png";
import FBIcon from "@/public/images/icon/fb.png";
import INIcon from "@/public/images/icon/in.png";
import React from "react";
import Link from "next/link";
import { Mail, Phone, PinDropOutlined } from "@mui/icons-material";

function Jumbotron() {
  const { palette } = useTheme();
  return (
    <Stack
      pl={{ xs: 2, lg: "120px" }}
      pr={{ xs: 2, lg: "120px" }}
      pb={3}
      pt={3}
    >
      <Grid container spacing={8}>
        <Grid xs={12} lg={4}>
          <Stack width={"100%"}>
            <Image
              src={profile}
              alt={"profile"}
              style={{
                aspectRatio: 1 / 1,
                width: "100%",
                height: "auto",
                borderRadius: "50px",
              }}
            />
          </Stack>
        </Grid>
        <Grid xs={12} lg={8}>
          <Stack
            width={"100%"}
            height={"100%"}
            justifyContent={{ lg: "center" }}
            rowGap={2}
          >
            <Typography
              // color={"white"}
              fontWeight={600}
              fontSize={32}
              lineHeight={"32px"}
            >
              Surya Maulana
            </Typography>
            <Typography fontWeight={500} fontSize={20}>
              Frontend Developer
            </Typography>

            <Stack>
              <Stack direction={"row"} gap={2} alignItems={"flex-start"}>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    color: "#FFFFFF",
                    backgroundColor: palette.primary.main,
                    width: "18px",
                    height: "18px",
                  }}
                >
                  <Phone style={{ fontSize: "14px" }} />
                </Box>
                <Typography>089685376643</Typography>
              </Stack>

              <Stack direction={"row"} gap={2} alignItems={"flex-start"}>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    color: "#FFFFFF",
                    backgroundColor: palette.primary.main,
                    width: "18px",
                    height: "18px",
                  }}
                >
                  <Mail sx={{ fontSize: "14px" }} />
                </Box>
                <Typography>maulana.surya1501@gmail.com</Typography>
              </Stack>

              <Stack direction={"row"} gap={2} alignItems={"flex-start"}>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "40px",
                    color: "#FFFFFF",
                    backgroundColor: palette.primary.main,
                    width: "18px",
                    height: "18px",
                  }}
                >
                  <PinDropOutlined sx={{ fontSize: "14px" }} />
                </Box>
                <Typography>
                  Priyang RT. 09/08 NO.77, Kelurahan pondok jagung, Kecamatan
                  Serpong Utara, Kota Tangerang Selatan
                </Typography>
              </Stack>
            </Stack>

            <Stack direction={"row"} gap={2}>
              <IconButton
                sx={{
                  padding: 0,
                }}
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
                sx={{
                  padding: 0,
                }}
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
                sx={{
                  padding: 0,
                }}
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
            </Stack>
            <Stack>
              <Typography fontWeight={600} fontSize={28}>
                About Me
              </Typography>
              <Typography color={palette.text.secondary}>
                Experienced as a professional Web Developer for more than 3
                years,currently focusing on using NextJS familiar with React JS,
                Cilent and Server Side Rendering, React Context, redux, React
                Testing Library, material UI, RESTful APIs, Antdesign,
                Bootstrap, Gitlab, Unix operating system for daily work.
                Accustomed to working with a team, ready and enthusiastic about
                receiving input & discussions in determining the technology &
                the best way to complete any given job.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Jumbotron;
