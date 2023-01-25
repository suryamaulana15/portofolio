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
        Tentang Saya
      </Typography>
      <Typography color={palette.text.secondary}>
        Berpengalaman sebagai profesional Web Developer selama lebih dari 2
        tahun, saat ini fokus menggunakan NextJS, familiar dengan RESTful APIs,
        material UI, Antd, gitlab, Unit Testing, ReactJS, Redux, sistem operasi
        Unix untuk pekerjaan sehari-hari. Terbiasa bekerja bersama tim, siap dan
        antusias menerima masukan & bediskusi dalam menentukan teknologi & cara
        terbaik untuk menyelesaikan setiap pekerjaan yg diberikan.
      </Typography>
    </Stack>
  );
}

export default Profile;
