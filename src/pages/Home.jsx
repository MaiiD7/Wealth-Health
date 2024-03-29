import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import HomeGrid from "../components/HomeGrid/HomeGrid";
import Title from "../components/Title/Title";

// Home Page
const Home = () => {
  return ( 
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh', maxHeight: '100vh', background: 'linear-gradient(117.06deg, rgba(249, 251, 255, 0.68) 2.45%, rgba(214, 228, 255, 0.53) 98.12%)'}}>

      {/* Header and Title */}
      <div style={{flexShrink: 0, display: 'flex', flexDirection: 'column'}}>
        <Header />
        <Title />
        <h2 style={{fontSize: '22px', fontWeight: 800, lineHeight: '20px', letterSpacing: '0em', textAlign: 'left', color: 'rgba(2, 32, 99, 1)', margin: '25px 0px 0px 140px',}}>Create Employee</h2>
      </div>

      {/* Form Grid Container */}
      <Box style={{flexGrow: 1, padding: '35px 140px', display: 'flex', flexDirection: 'column', gap: '35px'}}>
        <HomeGrid/>   
      </Box>
    </div>
    
   );
}
 
export default Home;