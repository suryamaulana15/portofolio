import { Stack, useTheme, Button, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import { data } from "./data";
import { useRouter } from "next/router";
import Image from "next/image";

function PortofolioList() {
  const { palette } = useTheme();
  const { push } = useRouter();

  return (
    <Stack
      pl={{ xs: "16px", lg: "120px" }}
      pr={{ xs: "16px", lg: "120px" }}
      gap={2}
      pb={3}
      pt={3}
    >
      <Grid container spacing={8}>
        {data.map((portofolio, index) => {
          return (
            <Grid key={index} xs={12} md={6}>
              <Card
                sx={{
                  boxShadow:
                    "0px 146px 58px rgba(0, 0, 0, 0.01), 0px 82px 49px rgba(0, 0, 0, 0.03), 0px 37px 37px rgba(0, 0, 0, 0.04), 0px 9px 20px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05)",
                  borderRadius: "16px",
                  bgcolor:
                    palette.mode === "light"
                      ? "#ffffff"
                      : palette.background.paper,
                }}
              >
                <Stack direction={"column"} gap={2} p={5}>
                  <Stack>
                    <Image
                      src={portofolio.image}
                      alt={portofolio.title}
                      style={{ aspectRatio: 16 / 9, width: "100%" }}
                    />
                  </Stack>

                  <Stack gap={2} direction={"row"} alignItems={"center"}>
                    {portofolio.platform.map((platform, index) => {
                      return (
                        <Image
                          src={platform}
                          alt={"logo-bapenda"}
                          width={26}
                          height={28}
                          key={index}
                        />
                      );
                    })}
                  </Stack>
                  <Stack gap={2} direction={"row"} alignItems={"center"}>
                    <Image
                      src={portofolio.logo}
                      alt={"logo-bapenda"}
                      width={56}
                      height={42}
                    />
                    <Typography
                      fontSize={"24px"}
                      fontWeight={900}
                      lineHeight={"29px"}
                      fontStyle={"normal"}
                      color={palette.primary.main}
                    >
                      {portofolio.title}
                    </Typography>
                  </Stack>
                  <Typography
                    fontSize={"20px"}
                    fontWeight={400}
                    lineHeight={"32px"}
                    letterSpacing={"0,15px"}
                  >
                    {portofolio.description}
                  </Typography>
                  <Button
                    variant={"outlined"}
                    color={"primary"}
                    endIcon={<ArrowRightAltOutlined />}
                    onClick={() => push(portofolio.url)}
                  >
                    See Details
                  </Button>
                </Stack>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}

export default PortofolioList;
