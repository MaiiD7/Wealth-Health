import { Box, RadioGroup, Radio, FormControlLabel, styled } from "@mui/material";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { useEffect } from "react";
import { states, departments, initialFormState } from "../../data/data";
import FormSubmission from "./FormSubmission";

// Import from Custom Packages published on NPM
import { Input } from "@maiid7/react-custom-input";

const StyledDatePicker = styled(DatePicker)(() => ({
  width: "90%",
  "& .MuiInputBase-input": {
    paddingLeft: "0px",
  },
  "& .MuiOutlinedInput-root": {
    " > fieldset": {
      borderColor: "rgba(214, 228, 255, 1)",
      padding: "0px 10px",
    },
    "&:hover > fieldset": { borderColor: "rgba(60, 120, 238, 1)" },
    "&:focus-visible > fieldset": { borderColor: "rgba(60, 120, 238, 1)" },
    height: "38px",
    fontSize: "14px",
    padding: "0px 10px",
    borderRadius: "8px",
    backgroundColor: "white",
  },
}));

const HomeGrid = () => {
  // useStates for Form Submission
  const [disabledButton, setDisabledButton] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // RegExp passed to Custom Input as props (for validation)
  const simpleTextRegExp = /^[a-z][a-z '-]{0,31}$|^$/i;
  const zipCodeRegExp = /^[0-9]{5}(?:-[0-9]{4})?$/;

  // Initialize form with state from data.js
  const [form, setForm] = useState(initialFormState);

  // ****************** //
  // **** Handlers **** //
  // ****************** //

  // For Input
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // For Date Picker and Select
  const handleValueChange = (name, newValue) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  // UseEffect to handle form validation
  // Submit Button disabled if empty or unvalid inputs
  useEffect(() => {
    if (
      document.querySelectorAll(".error").length !== 0 ||
      Object.values(form).includes("") ||
      Object.values(form).includes(null)
    ) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [form]);

  // Form Submission
  // Add new employee to array in localStorage
  // Reset Form and display SnackBar
  const submitForm = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));

    localStorage.setItem(
      "employees",
      JSON.stringify(employees ? [...employees, form] : [form])
    );

    setForm(initialFormState);
    setSnackbarOpen(true);
  };

  // Return Form Grid with custom Inputs
  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        columnGap={18}
        rowGap={2}
        sx={{ flexGrow: 0.5 }}
      >

        <Box
          gridColumn="span 1"
          gridRow="1"
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: form.gender === "other" ? "flex-start" : "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          
          {/* Gender Radio and Input Container */}
          <RadioGroup
            row
            name="gender"
            value={form.gender}
            onChange={handleInputChange}
            sx={{
              position: form.gender === "other" ? "absolute" : "static",
              bottom: "70%",
            }}
          >
            <FormControlLabel
              sx={{ fontSize: "12px" }}
              value="female"
              control={<Radio />}
              label="Mme"
            />
            <FormControlLabel
              sx={{ fontSize: "12px" }}
              value="male"
              control={<Radio />}
              label="Mr"
            />
            <FormControlLabel
              sx={{ fontSize: "12px" }}
              value="other"
              control={<Radio />}
              label="Personalize"
            />
          </RadioGroup>

          {form.gender === "other" && (
            <Input
              style={{ marginTop: "28px" }}
              placeholder="Gender"
              name="genderData"
              value={form.genderData}
              onChange={handleInputChange}
              regExp={simpleTextRegExp}
            />
          )}
        </Box>

        {/* First Name Input */}
        <Box gridColumn="span 1" gridRow="2">
          <Input
            label="First Name"
            placeholder="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleInputChange}
            regExp={simpleTextRegExp}
          />
        </Box>

        {/* Last Name Input */}
        <Box gridColumn="span 1" gridRow="3">
          <Input
            label="Last Name"
            placeholder="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleInputChange}
            regExp={simpleTextRegExp}
          />
        </Box>
        <Box
          gridColumn="span 1"
          gridRow="4"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          {/* Birth Date Picker */}
          <label style={{ marginBottom: "5px" }}>Birth Date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker
              value={form.birthDate}
              onChange={(newDate) => handleValueChange("birthDate", newDate)}
              disableUnderline
              disableFuture
              sx={{ width: "100%" }}
              format="DD/MM/YYYY"
            />
          </LocalizationProvider>
        </Box>

        {/* Adress Input */}
        <Box gridColumn="span 1" gridRow="1">
          <Input
            label="Adress"
            placeholder="Address"
            name="address"
            value={form.address}
            onChange={handleInputChange}
          />
        </Box>

        {/* City Input */}
        <Box gridColumn="span 1" gridRow="2">
          <Input
            label="City"
            placeholder="City"
            name="city"
            value={form.city}
            onChange={handleInputChange}
            regExp={simpleTextRegExp}
            icon={<LocationCityIcon />}
          />
        </Box>

        {/* Zip Code Input */}
        <Box gridColumn="span 1" gridRow="3">
          <Input
            label="Zip Code"
            placeholder="Zip Code"
            name="zipCode"
            value={form.zipCode}
            onChange={handleInputChange}
            regExp={zipCodeRegExp}
          />
        </Box>

        {/* State Select */}
        <Box gridColumn="span 1" gridRow="4">
          <Input
            select
            options={states}
            label="State"
            placeholder="State"
            name="state"
            value={form.state}
            onChange={(newValue) => handleValueChange("state", newValue)}
          />
        </Box>
        <Box
          gridColumn="span 1"
          gridRow="1"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >

          {/* Start Date Picker */}
          <label style={{ marginBottom: "5px" }}>Start Date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker
              value={form.startDate}
              onChange={(newDate) => handleValueChange("startDate", newDate)}
              disableUnderline
              sx={{ width: "100%" }}
              format="DD/MM/YYYY"
            />
          </LocalizationProvider>
        </Box>

        {/* Department Select */}
        <Box gridColumn="span 1" gridRow="2">
          <Input
            select
            options={departments}
            label="Department"
            placeholder="Department"
            name="department"
            value={form.department}
            onChange={(newValue) => handleValueChange("department", newValue)}
          />
        </Box>

      </Box>

      {/* Custom Submit Button and success SnackBar */}
      <FormSubmission
        submitForm={submitForm}
        disabledButton={disabledButton}
        snackbarOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
      />
    </>
  );
};

export default HomeGrid;
