import { DataGrid } from '@mui/x-data-grid';
import CustomNoRowsOverlay from "./CustomNoRowsOverlay";
import customGridToolbarQuickFilter from "./customGridToolbarQuickFilter";
import { columns } from '../../data/data';
import { styled } from '@mui/material';

const StyledDataGrid = styled(DataGrid)({
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
  '& .MuiDataGrid-virtualScroller': {
    overflow: 'hidden'
  },
  '& .MuiDataGrid-overlayWrapper': {
    height: '100%'
  },
  '& .MuiDataGrid-overlayWrapperInner': {
    height: '100% !important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Return the Data Grid with employees
const EmployeesTable = () => {
  
  const rows = localStorage.getItem("employees") ? JSON.parse(localStorage.getItem("employees")) : [];

  return ( 
    <>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        autoPageSize
        disableColumnMenu
        slots={{
          noRowsOverlay: CustomNoRowsOverlay,
          noResultsOverlay: CustomNoRowsOverlay,
          toolbar: customGridToolbarQuickFilter
        }}
      />
    </>
   );
}
 
export default EmployeesTable;