import DataGrid from "../components/DataGrid/DataGrid";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";

// Employees Page
const Employees = () => {
  return ( 
    <div style={{maxWidth: '100vw', maxHeight: '100vh', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff'}}>

      {/* Header and Title */}
      <div style={{flexGrow: 0}}>
        <Header />
        <Title />
        <h2 style={{fontSize: '22px', fontWeight: 800, lineHeight: '20px', letterSpacing: '0em', textAlign: 'left', color: 'rgba(2, 32, 99, 1)', margin: '25px 0px 0px 120px',}}>Current Employees</h2>
      </div>

      {/* Data Grid Container */}
      <div
      style={{
        padding: '25px 100px 25px 100px',
        flexGrow: 0.9
      }}>
        <DataGrid />
      </div>
      
    </div>
   );
}
 
export default Employees;