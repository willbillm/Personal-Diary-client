import  { React, useState, useEffect } from 'react';
import axios from 'axios';
import Row from '../diaryFunctions/showTableRow.js'

import AppBar from '@mui/material/AppBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function CollapsibleTable() {

const [entryList, setEntryList] = useState([])

useEffect(() => {
  axios.get('http://localhost:5000/entries').then( (allEntries) => {
    setEntryList(allEntries.data)
  })
}, [])


  return (
    <AppBar position="static" sx={{ flexGrow: 1, alignItems: 'center', margin: '30px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Entry Title</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entryList.map((entry, key) => (
              <Row key={key} row={entry} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </AppBar>
  );
}


