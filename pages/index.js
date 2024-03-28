import Head from "next/head";
import { Box, Container, Grid, TextField,Typography,Button } from "@mui/material";
import CredntialLogin from "src/content/AUTH/Credenial";

export default function Home() {
  return (
    <>
      <Head>
        <title>LOOT</title>
        <meta name="description" content="looting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Container maxWidth="lg" sx={{my:"26px"}}>
          <Box sx={{display:"flex",justifyContent:'space-between'}}>
            <Box>
              <Typography variant="h1" sx={{
                  fontSize: {xs:"35px"},
                  fontWeight: 700,
                  // lineHeight:{xs:"90.27px",md:"154px",lg:"219px"},
                  fontFamily:"Inknut Antiqua"
                }}>LOOT</Typography>
              <Typography sx={{fontSize:{sm:"10px"}}}>
                Today is a new day.It’s your day. You can win.
              </Typography>
            </Box>
            <Box>
              <Box>
                <Box sx={{width:"122px",height:"55px",borderRadius:"120px",background:"#000"}}></Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{fontSize:{xs:"25px"},lineHeight:{xs:"31px"},fontFamily:"Space Grotesk",textAlign:"center",marginTop:"80px"}}>
            Login to your Account
          </Box>
          <CredntialLogin />
        </Container>
      </Box>
    </>
  );
}
