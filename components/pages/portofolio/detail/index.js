import { useEffect, useState, Fragment } from "react";
import {
  Button,
  Stack,
  Typography,
  Box,
  Slider,
  useTheme,
  Icon,
  styled,
} from "@mui/material";
import { useRouter } from "next/router";

import { ArrowBackOutlined, CheckCircle } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";

const CardIconTechnology = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "68px",
  height: "68px",
  background: "#FFFFFF",
  border: "0.4px solid #E5EAF2",
  boxShadow:
    "0px 199px 80px rgba(0, 0, 0, 0.01), 0px 112px 67px rgba(0, 0, 0, 0.05), 0px 50px 50px rgba(0, 0, 0, 0.09)",
  borderRadius: "16px",
}));

import reactIcon from "@/public/images/icon/reactIcon.svg";

function PortofolioDetail({ detail }) {
  const { push } = useRouter();
  const { palette } = useTheme();

  return (
    <Stack
      pl={{ lg: "120px", xs: "5px" }}
      pr={{ lg: "120px", xs: "5px" }}
      mt={{ lg: "74px" }}
      mb={8}
      direction={"column"}
      gap={3}
    >
      <Stack direction={"column"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            variant={"text"}
            startIcon={<ArrowBackOutlined />}
            onClick={() => push("/portofolio")}
          >
            Back
          </Button>
          <Typography>
            Category: <Button>{detail.category}</Button>
          </Typography>
        </Stack>
      </Stack>

      <Grid
        container
        spacing={8}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={4}
        pl={2}
        pr={2}
      >
        <Grid lg={6} xs={12}>
          <Stack direction={"column"} spacing={2}>
            <Image
              src={detail.logo}
              alt={"logo"}
              style={{ aspectRatio: 2 / 1, width: "154px" }}
            />

            <Typography
              fontWeight={900}
              fontSize={42}
              lineHeight={"56px"}
              color={palette.primary.main}
            >
              {detail.title}
            </Typography>
            <Typography fontWeight={500} fontSize={24} lineHeight={"29px"}>
              {detail.subtitle[0]}
            </Typography>
            <Typography
              fontSize={16}
              fontWeight={400}
              lineHeight={"24px"}
              letterSpacing={"0.15px"}
              color={palette.text.secondary}
            >
              {detail.description[0]}
            </Typography>

            <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
              {detail.platform.map((platform, index) => {
                return (
                  <Image
                    src={platform}
                    alt={"play-store"}
                    style={{ aspectRatio: 4 / 1, width: "130px" }}
                    key={index}
                  />
                );
              })}
            </Stack>
          </Stack>
        </Grid>
        <Grid lg={6} xs={12}>
          <Stack>
            <Image
              src={detail.image[0]}
              alt={"portofolio"}
              style={{ aspectRatio: 16 / 9, width: "100%" }}
            />
          </Stack>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={18}
        alignItems={"stretch"}
        justifyContent={"space-between"}
        mb={4}
        mt={4}
        pl={2}
        pr={2}
      >
        <Grid xs={12} lg={6}>
          <Stack spacing={2}>
            <Typography color={palette.secondary.main}>Development</Typography>

            <Typography
              fontWeight={500}
              fontSize={34}
              lineHeight={"42px"}
              letterSpacing={"0.25px"}
            >
              Role
            </Typography>
            <Stack direction={"row"} spacing={2}>
              <Stack flexDirection={"column"} alignItems={"center"}>
                <CardIconTechnology>
                  <Image
                    src={detail.role.icon}
                    alt={"icon"}
                    style={{ aspectRatio: 1 / 1, width: 45, height: 45 }}
                  />
                </CardIconTechnology>
                <Typography>{detail.role.name}</Typography>
              </Stack>
            </Stack>

            <Typography
              fontWeight={500}
              fontSize={34}
              lineHeight={"42px"}
              letterSpacing={"0.25px"}
            >
              Platform
            </Typography>
            <Stack direction={"row"} spacing={2}>
              {detail.technology.map((technology, index) => {
                return (
                  <Box
                    width={56}
                    height={56}
                    bgcolor={"#D7EAFA"}
                    borderRadius={"40px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    key={index}
                  >
                    <Image
                      src={technology}
                      alt={"icon"}
                      style={{ aspectRatio: 1 / 1 }}
                    />
                  </Box>
                );
              })}
            </Stack>

            <Typography
              fontWeight={500}
              fontSize={34}
              lineHeight={"42px"}
              letterSpacing={"0.25px"}
            >
              Technology
            </Typography>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              gap={"16px"}
              flexWrap={"wrap"}
            >
              {detail?.technologyApps?.map((technology, index) => {
                return (
                  <Stack
                    key={index}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <CardIconTechnology>
                      <Image
                        src={technology.icon}
                        alt={"icon"}
                        style={{ aspectRatio: 1 / 1, width: 45, height: 45 }}
                      />
                    </CardIconTechnology>
                    <Typography>{technology.name}</Typography>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Grid>
        <Grid xs={12} lg={6}>
          <Stack spacing={2}>
            <Typography color={palette.secondary.main}>Feature</Typography>

            <Typography
              fontWeight={500}
              fontSize={34}
              lineHeight={"42px"}
              letterSpacing={"0.25px"}
            >
              Complexity
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              spacing={1}
            >
              {detail.complexity === "hard" ? (
                <Fragment>
                  <Slider
                    value={90}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    size={"medium"}
                    disabled={true}
                    style={{ color: palette.primary.main, height: "10px" }}
                  />
                  <Typography
                    fontWeight={500}
                    fontSize={24}
                    lineHeight={"20px"}
                    color={palette.error.main}
                  >
                    Hard
                  </Typography>
                </Fragment>
              ) : (
                <Fragment>
                  <Slider
                    value={50}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    size={"medium"}
                    disabled={true}
                    style={{ color: palette.primary.main, height: "10px" }}
                  />
                  <Typography
                    fontWeight={500}
                    fontSize={24}
                    lineHeight={"20px"}
                    color={palette.secondary.main}
                  >
                    Medium
                  </Typography>
                </Fragment>
              )}
            </Stack>

            <Typography
              fontWeight={500}
              fontSize={34}
              lineHeight={"42px"}
              letterSpacing={"0.25px"}
            >
              Deliverables
            </Typography>

            {detail.deliverables.map((deliverable, index) => {
              return (
                <Stack
                  direction={"row"}
                  gap={2}
                  alignItems={"center"}
                  key={index}
                >
                  <CheckCircle color={"primary"} fontSize={"large"} />
                  <Typography
                    fontWeight={500}
                    fontSize={"24px"}
                    lineHeight={"29px"}
                  >
                    {deliverable}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={8}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={4}
        mt={4}
        pl={2}
        pr={2}
      >
        <Grid xs={12} lg={6}>
          <Stack gap={2}>
            <Typography
              fontWeight={600}
              fontSize={34}
              lineHeight={"42px"}
              letterSpacing={"0.25px"}
            >
              {detail.subtitle[1]}
            </Typography>
            <Typography>{detail.description[1]}</Typography>
          </Stack>
        </Grid>
        <Grid xs={12} lg={6}>
          <Stack>
            <Image
              src={detail.image[1]}
              alt={"porto"}
              style={{ aspectRatio: 1 / 1, width: "100%" }}
            />
          </Stack>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={8}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={4}
        mt={4}
        pl={2}
        pr={2}
      >
        <Grid xs={12} lg={6}>
          <Stack>
            <Image
              src={detail.image[2]}
              alt={"porto"}
              style={{ aspectRatio: 1 / 1, width: "100%" }}
            />
          </Stack>
        </Grid>
        <Grid xs={12} lg={6}>
          <Stack gap={2}>
            <Typography
              fontWeight={600}
              fontSize={34}
              lineHeight={"42px"}
              letterSpacing={"0.25px"}
            >
              {detail.subtitle[2]}
            </Typography>
            <Typography>{detail.description[2]}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default PortofolioDetail;
