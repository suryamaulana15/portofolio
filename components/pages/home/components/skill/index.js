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

      <Stack direction={"row"} gap={2} display={"flex"} flexWrap={"wrap"}>
        {data.map((skill, index) => (
          <Typography
            key={index}
            color={"#FFFFFF"}
            fontWeight={600}
            p={"10px 20px"}
            bgcolor={palette.primary.main}
            borderRadius={40}
          >
            {skill}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
}

export default Skill;
