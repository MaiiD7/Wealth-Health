import { Box, Button } from "@mui/material";
import Header from "../components/Header/Header";
import HomeGrid from "../components/HomeGrid/HomeGrid";
import Title from "../components/Title/Title";

// Home Page
const Home = () => {
  return ( 
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh', maxHeight: '100vh', background: 'linear-gradient(117.06deg, rgba(249, 251, 255, 0.68) 2.45%, rgba(214, 228, 255, 0.53) 98.12%)'}}>
      <div style={{flexShrink: 0, display: 'flex', flexDirection: 'column'}}>
        <Header />
        <Title />
        <h2 style={{fontSize: '22px', fontWeight: 800, lineHeight: '20px', letterSpacing: '0em', textAlign: 'left', color: 'rgba(2, 32, 99, 1)', margin: '25px 0px 0px 140px',}}>Create Employee</h2>
      </div>
      <Box style={{flexGrow: 1, padding: '35px 140px', display: 'flex', flexDirection: 'column', gap: '35px'}}>
        <HomeGrid/>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '35px'}}>
          <Button variant="contained" disableElevation sx={{textTransform: 'none', backgroundColor: 'rgba(2, 32, 99, 1)', borderRadius: '8px', color: 'rgba(214, 228, 255, 1)', padding: '8px 16px', width: '80px', height: '35px', fontSize: '14px', position: 'right'}}>Save</Button>
        </div>
        
      </Box>
      
    </div>
    
   );
}
 
export default Home;