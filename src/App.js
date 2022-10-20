import React from 'react'
import CreateEntry from './components/diaryCards/createEntry.js'
import EntryTable from './components/diaryCards/showEntry.js'

import { Container, Grow, Grid } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth='sm'>
        <AppBar position="static" sx={{ flexGrow: 1, borderRadius: 15, alignItems: 'center', margin: '30px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Toolbar>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1, alignItems: 'center' }}>
              Personal Diary
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>

      <Grow in>
        <Container>
              <Grid container justifyContent='space-between' alignItems='stretch'>
                  
                  <CreateEntry />
                
                  <EntryTable/>
                
              </Grid>
          </Container>
      </Grow>
    </Box>
  )
}

export default App