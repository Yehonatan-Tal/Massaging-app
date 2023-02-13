import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {v4 as uuidv4} from 'uuid'

export default function Login(props) {

  function handleSubmit(event) {
    event.preventDefault();
    
  }


  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={1} >
        <Grid item xs={12} md={12}>
          <TextField  sx = {{ width: "300px"}}  label="Enter your ID" variant="outlined" onChange={event => {props.handleClick(event.target.value)} } required/>
        </Grid>
        <Grid item xs={12} md={12} >
          <Stack sx = {{ width: "300px"}} spacing={2} direction="row">
            <Button variant="contained"  onClick={(event) => handleSubmit(event)}>LOGIN</Button>
            <Button variant="outlined" onClick={() => {props.handleClick(uuidv4())}}>create new id</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
