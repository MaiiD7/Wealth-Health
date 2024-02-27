import { Box } from "@mui/material";
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import CustomNoRowsOverlay from "./CustomNoRowsOverlay";
import customGridToolbarQuickFilter from "./customGridToolbarQuickFilter";

const columns = [
  { field: 'firstName', headerName: 'First name', flex:  1 },
  { field: 'lastName', headerName: 'Last name', flex:  1 },
  { field: 'dateOfBirth', headerName: 'Date of Birth', flex:  1 },
  { field: 'department', headerName: 'Department', flex:  1 },
  { field: 'startDate', headerName: 'Start Date', flex:  1 },
  { field: 'street', headerName: 'Street', flex:  1 },
  { field: 'city', headerName: 'City', flex:  1 },
  { field: 'state', headerName: 'State', flex:  1 },
  { field: 'zipCode', headerName: 'Zip Code', flex:  1 }
];

const rows = [
  {
    id: 1,
    firstName: "mai",
    lastName: "d",
    dateOfBirth: "02/06/2024",
    startDate: "02/16/2024",
    department: "Sales",
    street: "ijebfv",
    city: "efv",
    state: "AL",
    zipCode: "678",
    sortable: false,
    align: 'center'
  },
  {
    id: 2,
    lastName: "d2",
    firstName: "mai2",
    dateOfBirth: "02/06/2024",
    startDate: "02/16/2024",
    department: "Sales",
    street: "ijebfv",
    city: "efv",
    state: "CA",
    zipCode: "678",
    sortable: false
  },
  {
    id: 3,
    firstName: "mai3",
    lastName: "d3",
    dateOfBirth: "02/06/2024",
    startDate: "02/16/2024",
    department: "Engineering",
    street: "ijebfv",
    city: "efv",
    state: "CA",
    zipCode: "789",
    sortable: false
  },
  {
    id: 4,
    firstName: "mai3",
    lastName: "d3",
    dateOfBirth: "02/06/2024",
    startDate: "02/16/2024",
    department: "Engineering",
    street: "ijebfv",
    city: "efv",
    state: "CA",
    zipCode: "789",
    sortable: false
  },
  {
    id: 5,
    firstName: "mai3",
    lastName: "d3",
    dateOfBirth: "02/06/2024",
    startDate: "02/16/2024",
    department: "Engineering",
    street: "ijebfv",
    city: "efv",
    state: "CA",
    zipCode: "789",
    sortable: false
  },
  {
    id: 6,
    firstName: "mai3",
    lastName: "d3",
    dateOfBirth: "02/06/2024",
    startDate: "02/16/2024",
    department: "Engineering",
    street: "ijebfv",
    city: "efv",
    state: "CA",
    zipCode: "789",
    sortable: false
  },
  {
    id: 7,
    firstName: "mai3",
    lastName: "d3",
    dateOfBirth: "02/06/2024",
    startDate: "02/16/2024",
    department: "Engineering",
    street: "ijebfv",
    city: "efv",
    state: "CA",
    zipCode: "789",
    sortable: false
  },
  {
    id: 8,
    firstName: "mai3",
    lastName: "d3",
    dateOfBirth: "02/06/2024",
    startDate: "02/16/2024",
    department: "Engineering",
    street: "ijebfv",
    city: "efv",
    state: "CA",
    zipCode: "789",
    sortable: false
  },
  {
    id: 9,
    firstName: "mai3",
    lastName: "d3",
    dateOfBirth: "02/06/2024",
    startDate: "02/16/2024",
    department: "Engineering",
    street: "ijebfv",
    city: "efv",
    state: "CA",
    zipCode: "789",
    sortable: false
  },
  {
    id: 10,
    firstName: "mai3",
    lastName: "d3",
    dateOfBirth: "02/06/2024",
    startDate: "02/16/2024",
    department: "Engineering",
    street: "ijebfv",
    city: "efv",
    state: "CA",
    zipCode: "789",
    sortable: false
  }
]

const EmployeesTable = () => {
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