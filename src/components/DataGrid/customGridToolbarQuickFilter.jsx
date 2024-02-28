import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import styled from "styled-components";

const StyledToolbar = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '80px',
  width: '100%',
  borderRadius: '8px 8px 0px 0px'
}));

const customGridToolbarQuickFilter = () => {
  return ( 
    <StyledToolbar style={{backgroundColor: '#d6e4ff'}}>
      <GridToolbarQuickFilter 
      sx={{ 
        backgroundColor: 'white',
        marginLeft: '20px',
        borderRadius: '5px',
        padding: '5px',
        borderBottom: 'none',
        '& .MuiInput-underline:before': {
          borderBottom: 'none',
          '&:hover': {
            borderBottom: 'none'
          }
        },
        '& .MuiInputBase-root:after': {
            borderBottom: 'none', // Remove the bottom border on focus
            '&:hover': {
              borderBottom: 'none'
            }
        },
        '& .MuiInputBase-root': {
          fontSize: '14px',
          '&:hover': {
            borderBottom: 'none',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: 'none'
          }
        },
        '[class$=MuiSvgIcon-root]': {
          color: 'rgba(0, 0, 0, 0.54)'
        }
      }}/>
    </StyledToolbar>
  
  );
}
 
export default customGridToolbarQuickFilter;