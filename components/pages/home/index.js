import { Stack } from "@mui/material";
import {
  Education,
  Jumbotron,
  Profile,
  Skill,
} from "@/components/pages/home/components";

function Home() {
  return (
    <Stack rowGap={5} pb={"64px"}>
      <Stack>
        <Jumbotron />
      </Stack>
      {/*<Stack>*/}
      {/*  <Profile />*/}
      {/*</Stack>*/}
      <Stack>
        <Education />
      </Stack>
      <Stack>
        <Skill />
      </Stack>
    </Stack>
  );
}

export default Home;
