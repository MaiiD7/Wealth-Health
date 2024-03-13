import { DataGrid } from '@mui/x-data-grid';
import CustomNoRowsOverlay from "./CustomNoRowsOverlay";
import customGridToolbarQuickFilter from "./customGridToolbarQuickFilter";
import { useEffect, useState } from 'react';

const EmployeesTable = () => {

  const columns = [
    { field: 'firstName', headerName: 'First name', flex:  1 },
    { field: 'lastName', headerName: 'Last name', flex:  1 },
    { field: 'birthDate', headerName: 'Date of Birth', flex:  1 },
    { field: 'department', headerName: 'Department', flex:  1 },
    { field: 'startDate', headerName: 'Start Date', flex:  1 },
    { field: 'address', headerName: 'Adress', flex:  1 },
    { field: 'city', headerName: 'City', flex:  1 },
    { field: 'state', headerName: 'State', flex:  1 },
    { field: 'zipCode', headerName: 'Zip Code', flex:  1 }
  ];
  
  const rows = localStorage.getItem("employees") ? JSON.parse(localStorage.getItem("employees")) : [];

  return ( 
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        autoPageSize
        disableColumnMenu
        sx={{
          borderRadius: '10px 10px 0px 0px',
          '& .MuiDataGrid-main': {
            borderRadius: 0
          },
          '& .MuiDataGrid-columnHeaders': {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            backgroundColor: '#d6e4ff'
          },
          '[class$=MuiDataGrid-columnHeaderTitleContainer]': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          },
          '[class$=MuiDataGrid-columnHeaderTitle]': {
            fontWeight: 600
          },
          '& .MuiDataGrid-sortIcon': {
            display: 'none',
          },
          '& .MuiDataGrid-columnHeader:hover .MuiDataGrid-iconButtonContainer': {
            display: 'none'
          },
          '& .MuiDataGrid-columnHeader--sortable': {
            cursor: 'default'
          },
          '& .MuiDataGrid-cell': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center', // Center the text in cells
          },
          
        }}
        slots={{
          noRowsOverlay: CustomNoRowsOverlay,
          toolbar: customGridToolbarQuickFilter
        }}
      />
    </>
      
   );
}
 
export default EmployeesTable;