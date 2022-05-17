import {Container, Grid, Box} from "@mui/material";
import SignUp from "../components/SignUp"
import SignIn from "../components/SignIn"

function HomePage() {
  return (
    <>
      <Container fixed>
          <Box sx={{ bgcolor:'#f7f6f6', height:'100vh' }} >
            <h1 style={{textAlign:'center'}}>Admin Dashboard Management System</h1>
            <Grid container>
              <Grid lg={6}>
                <h2 style={{textAlign:'center'}}>SIGN UP</h2>
                <SignUp />
              </Grid>
              <Grid lg={6}>
                <h2 style={{textAlign:'center'}}>SIGN IN</h2>
                <SignIn />
              </Grid>
            </Grid>
          </Box>
      </Container>
    </>
  );
}

export default HomePage