import { Box } from "@mui/material";
import { Input } from 'react-custom-input';

const HomeGrid = () => {

  return (
      <Box 
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        columnGap={18}
        rowGap={2}
      >
        <Box gridColumn="span 1" gridRow="1">
          <Input label='Gender' placeholder='Gender' />
        </Box>
        <Box gridColumn="span 1" gridRow="2">
          <Input label='First Name' placeholder='First Name' />
        </Box>
        <Box gridColumn="span 1" gridRow="3">
          <Input label='Last Name' placeholder='Last Name' />
        </Box>
        <Box gridColumn="span 1" gridRow="4">
          <Input label='Calendar' placeholder='Calendar' />
        </Box>
        <Box gridColumn="span 1" gridRow="1">
          <Input label='Adress' placeholder='Adress' />
        </Box>
        <Box gridColumn="span 1" gridRow="2">
          <Input label='City' placeholder='City' />
        </Box>
        <Box gridColumn="span 1" gridRow="3">
          <Input label='Zip Code' placeholder='Zip Code' />
        </Box>
        <Box gridColumn="span 1" gridRow="4">
          <Input select options={['Opt1', 'Opt2', 'Opt3']} label='State' placeholder='State' />
        </Box>
        <Box gridColumn="span 1" gridRow="1">
          <Input label='Start Date' placeholder='Start Date' />
        </Box>
        <Box gridColumn="span 1" gridRow="2">
          <Input select options={['Opt1', 'Opt2', 'Opt3']} label='Department' placeholder='Department' />
        </Box>
      </Box>    
  )
} 

export default HomeGrid
