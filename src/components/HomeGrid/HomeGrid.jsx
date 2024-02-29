import { Box, Container, Grid, Paper, styled } from "@mui/material";
import { Input } from 'react-custom-input';

const HomeGrid = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));

  return (
      <Box 
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        columnGap={10}
        rowGap={6}
      >
        <Box gridColumn="span 4">
          <Input />
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=8</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=8</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=8</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=8</Item>
        </Box>
      </Box>    
  )
} 

export default HomeGrid
