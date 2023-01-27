import { Stack } from "@mui/material";
import { PortofolioList } from "@/components/pages/portofolio/components";

function Portofolio() {
  return (
    <Stack rowGap={5} pb={"64px"}>
      <Stack>
        <PortofolioList />
      </Stack>
    </Stack>
  );
}

export default Portofolio;
