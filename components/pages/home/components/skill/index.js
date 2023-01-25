import { Stack, Typography, useTheme } from "@mui/material";
import { data } from "./data";

function Skill() {
  const { palette } = useTheme();

  return (
    <Stack
      pl={{ lg: "120px", xs: "16px" }}
      pr={{ lg: "120px", xs: "16px" }}
      gap={2}
    >
      <Typography fontWeight={600} fontSize={28}>
        Skill
      </Typography>

      <Stack direction={"row"} columnGap={2} display={"flex"} flexWrap={"wrap"}>
        {data.map((skill) => (
          <Typography color={palette.text.secondary}>{skill},</Typography>
        ))}
      </Stack>
    </Stack>
  );
}

export default Skill;
