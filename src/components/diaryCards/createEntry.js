import React from 'react';
import Create from '../diaryFunctions/create.js'

import AppBar from '@mui/material/AppBar';

export default function CreateEntry() {
  return (
  <>
    <AppBar position="static" color='inherit' sx={{ margin: '30px 0'}}>

      <Create />
      
    </AppBar>
  </> 
  );
}