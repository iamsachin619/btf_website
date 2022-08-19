import TextField from '@mui/material/TextField';
import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import ContactForm from '../ContactForm';
import BookingForm from '../BookingForm';

import { Box, Paper, Container, Grid, Typography, useMediaQuery, Button, makeStyles, InputBase, Divider } from "@material-ui/core";
import { } from "@material-ui/core";
import { DividerWithText, DividerWithTextInBetween } from "../../common/DividerWithText";
import Footer from '../Footer';

export default function Booking() {
  return (
    <>
    <Container style={{marginTop:"75px",paddingTop:"5%",paddingBottom:"8%"}} maxWidth="md">
        <Grid container maxWidth="lg" justifyContent="center" >
        <DividerWithTextInBetween>
                    BOOK A APPOINTMENT
          </DividerWithTextInBetween>         
        </Grid>
        {/* <Grid container maxWidth="lg" justifyContent="center" style={{marginTop:"3%"}}>
          <span style={{fontSize:"200%",fontWeight:600}}>We provide exclusive services <br/> for your bussiness  </span>     
        </Grid> */}

        <BookingForm/>
      
        
    </Container>
    <Footer/>
    </>

  )
}
