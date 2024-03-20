import { Alert, Button, Snackbar } from "@mui/material";

const FormSubmission = (props) => {

  const { submitForm, disabledButton, snackbarOpen, setSnackbarOpen } = props;

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  // Return custom Submit Button and Snackbar to notify user when a new employee has been created
  return ( 
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "35px",
      }}
    >
      <Button
        variant="contained"
        disableElevation
        disabled={disabledButton}
        onClick={submitForm}
        sx={{
          textTransform: "none",
          backgroundColor: "rgba(2, 32, 99, 1)",
          borderRadius: "8px",
          color: "rgba(214, 228, 255, 1)",
          padding: "8px 16px",
          width: "80px",
          height: "35px",
          fontSize: "14px",
          position: "right",
        }}
        
      >
        Save
      </Button>
      <Snackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        sx={{borderRadius: '5px'}}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={2000}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          variant="filled"
          sx={{ width: '100%', borderRadius: '5px' }}
        >
          New Employee Created !
        </Alert>
      </Snackbar>
    </div>
   )
}
 
export default FormSubmission;