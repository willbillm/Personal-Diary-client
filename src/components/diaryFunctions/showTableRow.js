import React from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function Row(entry, key) {

    const deleteEntry = (id) => {
      axios.delete(`http://localhost:5000/entries/${id}`).then( () => {
        window.location.reload(false);
      })
    }
  
    const { row } = entry;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow  sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.title}
          </TableCell>
          <TableCell align="left">{row.date}</TableCell>
          <TableCell align="left">
            <Stack direction="row">
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => deleteEntry(row._id)}>
                Delete
              </Button>
            </Stack>
          </TableCell>
        </TableRow>
        <TableRow overflow="hidden">
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>{row.writing}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }