import Header from "../components/Header/Header";
import Title from "../components/Title/Title";

// Home Page
const Home = () => {
  return ( 
    <div style={{maxWidth: '100vw', maxHeight: '100vh', height: '100vh', display: 'flex', flexDirection: 'column', background: 'linear-gradient(117.06deg, rgba(249, 251, 255, 0.68) 2.45%, rgba(214, 228, 255, 0.53) 98.12%)'}}>
      <Header />
      <Title />
      <h2 style={{fontSize: '22px', fontWeight: 800, lineHeight: '20px', letterSpacing: '0em', textAlign: 'left', color: 'rgba(2, 32, 99, 1)', margin: '25px 0px 0px 120px',}}>Create Employee</h2>
    </div>
   );
}
 
export default Home;