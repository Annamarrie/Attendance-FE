import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { updateAttendanceAsync, loadUserAttendanceAsync } from "../store/thunks/attendancesThunk"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const AttendanceEdit = (props) => {
  const userId = window.location.href.split('/')[4];
  const [formData, setFormData] = useState({attendancedate:"", attendanceentrancetime:"", attendanceexittime:"" });
  const submitAttendance = (e) =>{
    e.preventDefault()
    props.updateAttendanceAsync(formData, userId)
  }
  return (
    <>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
             <Link to="/dashboard" className="btn btn-light my-3">
        Go Back
      </Link>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Edit
          </Typography>
          <Box component="form" noValidate onSubmit={submitAttendance} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="EntranceDate"
                  name="EntranceDate"
                  type="date"
                  autoComplete="EntranceDate"
                  value={formData.attendancedate}
                  onChange={(e) => setFormData({
                    ...formData, attendancedate: e.target.value
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="EntranceTime"
                  name="Entrance Time"
                  type="time"
                  autoComplete="Entrance Time" 
                  value={formData.attendanceentrancetime}
                   onChange={(e) => setFormData({
                     ...formData, attendanceentrancetime: e.target.value
                   })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                   required
                   fullWidth
                   id="EntranceExitTime"
                   name="Entrance Exit Time"
                   type="time"
                   autoComplete="Entrance Exit Time"
                   value={formData.attendanceexittime}
                   onChange={(e) => setFormData({
                     ...formData, attendanceexittime: e.target.value
                   })}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
     </>
  )
}

const mapStateToProps = (state) => {
  return {
  listAttend: state.attendances.listAttend,
  updatedList: state.attendances.updatedList,
  loading: state.attendances.loading,
  error: state.attendances.error,
}
}

export default connect(mapStateToProps, {loadUserAttendanceAsync, updateAttendanceAsync})(AttendanceEdit);
