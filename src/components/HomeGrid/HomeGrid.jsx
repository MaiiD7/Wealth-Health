import { Box, RadioGroup, Radio, FormControlLabel, styled, Button } from "@mui/material";
import { Input } from 'react-custom-input';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const HomeGrid = () => {

  const StyledDatePicker = styled(DatePicker)(() => ({
    width: "90%",
    '& .MuiInputBase-input': {
      paddingLeft: '0px'
    },
    "& .MuiOutlinedInput-root": {
    " > fieldset": {
      borderColor: 'rgba(214, 228, 255, 1)',
      padding: '0px 10px'
    },
    "&:hover > fieldset": { borderColor: "rgba(60, 120, 238, 1)" },
    "&:focus-visible > fieldset": { borderColor: "rgba(60, 120, 238, 1)" },
    height: "38px",
    fontSize: '14px',
    padding: '0px 10px',
    borderRadius: "8px",
    backgroundColor: 'white',
    
    },
  }));

  const [gender, setGender] = useState("female");
  const [genderData, setGenderData] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [department, setDepartment] = useState("");

  const getAllInputValues = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));

    const newEmployee = {
      id: `${lastName}-${firstName}`,
      gender: genderData !== "" ? genderData : gender,
      firstName,
      lastName,
      birthDate,
      address,
      city,
      zipCode,
      state,
      startDate,
      department,
    }

    localStorage.setItem("employees", JSON.stringify(employees ? [
      ...employees, newEmployee
    ] : [newEmployee]))
    
    console.log(employees)
  };

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
            justifyContent: gender === "other" ? "flex-start" : "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <RadioGroup
            row
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            sx={{
              position: gender === "other" ? "absolute" : "static",
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
          {gender === "other" && (
            <Input style={{ marginTop: "28px" }} placeholder="Gender" value={genderData} onChange={(e) => setGenderData(e.target.value)} />
          )}
        </Box>
        <Box gridColumn="span 1" gridRow="2">
          <Input label="First Name" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </Box>
        <Box gridColumn="span 1" gridRow="3">
          <Input label="Last Name" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
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
          <label style={{ marginBottom: "5px" }}>Birth Date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker value={birthDate} onChange={(newDate) => setBirthDate(newDate)} disableUnderline disableFuture/>
          </LocalizationProvider>
        </Box>
        <Box gridColumn="span 1" gridRow="1">
          <Input label="Adress" placeholder="Adress" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </Box>
        <Box gridColumn="span 1" gridRow="2">
          <Input label="City" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>
        </Box>
        <Box gridColumn="span 1" gridRow="3">
          <Input label="Zip Code" placeholder="Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
        </Box>
        <Box gridColumn="span 1" gridRow="4">
          <Input
            select
            options={["Opt1", "Opt2", "Opt3"]}
            label="State"
            placeholder="State"
            value={state}
            onChange={setState}
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
          <label style={{ marginBottom: "5px" }}>Start Date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker value={startDate} onChange={(newDate) => setStartDate(newDate)} disableUnderline sx={{ marginBottom: "5px" }}/>
          </LocalizationProvider>
        </Box>
        <Box gridColumn="span 1" gridRow="2">
          <Input
            select
            options={["Opt1", "Opt2", "Opt3", "Opt1", "Opt2", "Opt3"]}
            label="Department"
            placeholder="Department"
            value={department}
            onChange={setDepartment}
          />
        </Box>
      </Box>
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
          onClick={getAllInputValues}
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
      </div>
    </>
  );
} 

export default HomeGrid
