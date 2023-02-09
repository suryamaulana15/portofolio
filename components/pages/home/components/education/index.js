import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";

function Education() {
  return (
    <Stack pl={{ xs: "16px", lg: "120px" }} pr={{ xs: "16px", lg: "120px" }}>
      <Grid container spacing={8}>
        <Grid xs={12} lg={6}>
          <Stack>
            <Typography fontWeight={600} fontSize={28} gap={2}>
              Education
            </Typography>

            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack>
                    <Typography>Rekayasa Perangkat Lunak</Typography>
                    <Typography>SMKN 4 Tangerang</Typography>
                    <Typography>2011 - 2014</Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color={"primary"} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack>
                    <Typography>Ilmu Komputer (Student Exchange)</Typography>
                    <Typography>Universitas Gadjah Mada</Typography>
                    <Typography>jul 2016 - des 2016</Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant={"outlined"} color={"secondary"} />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack>
                    <Typography>Teknik Informatika</Typography>
                    <Typography>Universitas Budi Luhur</Typography>
                    <Typography>2014 - 2018</Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Stack>
        </Grid>

        <Grid xs={12} lg={6}>
          <Stack>
            <Typography fontWeight={600} fontSize={28} gap={2}>
              Employment
            </Typography>

            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack>
                    <Typography>IT Support</Typography>
                    <Typography>PT Cahaya Televisi Banten</Typography>
                    <Typography>2014 - 2016</Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color={"primary"} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack>
                    <Typography>Backend Developer</Typography>
                    <Typography>PT Ngampooz Pintar Sejahtera</Typography>
                    <Typography>2018 - 2020</Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant={"outlined"} color={"secondary"} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack>
                    <Typography>Frontend Developer</Typography>
                    <Typography>PT EOA Teknologi Internasional</Typography>
                    <Typography>2020 - 2022</Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant={"outlined"} />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack>
                    <Typography>Freelancer</Typography>
                    <Typography>2018 - saat ini</Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Education;
