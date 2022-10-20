import { React, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  { Container }from '@material-ui/core';
import axios from 'axios';
import Button from '@mui/material/Button';

export default function Create() {
    const [entry, setEntry] = useState({

        title: '',
        date: '',
        writing:''
        
    });

    const createEntry = () => {
        axios.post('http://localhost:5000/entries', entry).then( () => {
            window.location.reload(false);
        })
    }

  return (
  <>
    <Container>
        <TextField id="outlined-textarea" label="Title" placeholder='Type' multiline variant="outlined" sx={{ m: 2, width: '30ch'}} value={entry.title} onChange={(event) => {
            setEntry({ ...entry, title: event.target.value})
        }}/>
        <TextField id="outlined-basic" label="Date" placeholder='Type' variant="outlined" sx={{ m: 2, width: '30ch' }} value={entry.date} onChange={(event) => {
            setEntry({ ...entry, date: event.target.value})
        }}/>
        <Button variant="contained" sx={{ m: 2, width: '30ch'}} onClick={createEntry}>Submit</Button>
    </Container>
    <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 2, width: '145ch'},
        }}
        noValidate
        autoComplete="off"
    >
        <TextField id="outlined-textarea" label="Entry" placeholder='Type' multiline variant="outlined" value={entry.writing} onChange={(event) => {
        setEntry({ ...entry, writing: event.target.value})
        }}/>
    </Box>
  </> 
  );
}