import { Stack, Typography, useTheme } from "@mui/material";

function Profile() {
  const { palette } = useTheme();
  return (
    <Stack
      pl={{ xs: "16px", lg: "120px" }}
      pr={{ xs: "16px", lg: "120px" }}
      gap={2}
    >
      <Typography fontWeight={600} fontSize={28}>
        About Me
      </Typography>
      <Typography color={palette.text.secondary}>
        Experienced as a professional Web Developer for more than 3
        years,currently focusing on using NextJS familiar with React JS, Cilent
        and Server Side Rendering, React Context, redux, React Testing Library,
        material UI, , RESTful APIs, Antdesign, Bootstrap, Gitlab, Unix
        operating system for daily work. Accustomed to working with a team,
        ready and enthusiastic about receiving input & discussions in
        determining the technology & the best way to complete any given job.
      </Typography>
    </Stack>
  );
}

export default Profile;
