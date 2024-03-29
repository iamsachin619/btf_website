import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import { ContactUS } from './../api';
import { useState } from 'react';
import PrimaryColor from '../env';
const theme = createTheme();

export default function ContactForm() {

  const [emailError, setEmailError] = useState('')
  const [nameError, setNameError] = useState('')
  const [subjectError, setSubjectError] = useState('')
  const [messageError, setMessageError] = useState('')
  const [repeatError, setRepeatError] = useState('')
  const[submitSucess,SetSubmitSucess] = useState('')

  var EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get('name') === "") {
      setNameError("Please Enter your name")
      return;
    }
    if ( ! (/^[A-Za-z\s]+$/.test(data.get('name'))) ) {
        setNameError("Please Enter a valid Name")
        return;
    }
    setNameError('')

    if (data.get('email') === "") {
      setEmailError("Please Enter your Email")
      return;
    }
    if (!data.get('email').match(EMAIL_REGEX)) {
        setEmailError("Please Enter a valid Email")
        return;
    }
    setEmailError('')

    if (data.get('subject') === "") {
      setSubjectError("Please Enter the Subject")
      return;
    }
    setSubjectError('')

    if (data.get('message') === "") {
      setMessageError("Please Enter the Message")
      return;
    }
    setMessageError('')

    if(nameError === '' && emailError === '' && subjectError === '' && messageError === ''){
    const body = {
      name: data.get('name'),
      email: data.get('email'),
      subject: data.get('subject'),
      message:data.get('message')
    };
    const resp = await ContactUS(body)
    if(resp.status === 208)
      setRepeatError("Already contacted")
    if(resp.status === 200)
      SetSubmitSucess("Contacted Successfully")
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("subject").value = ""
    document.getElementById("message").value = ""

  };
}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  placeholder='Full Name Here'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonOutlineOutlinedIcon style={{color:PrimaryColor}}/>
                      </InputAdornment>
                    ),
                  }}
                />
              <span style={{color:"red"}}>{nameError}</span>  
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder='Email Here'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MailOutlineOutlinedIcon style={{color:PrimaryColor}}/>
                      </InputAdornment>
                    ),
                  }}
                />
                <span style={{color:"red"}}>{emailError}</span>
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="subject"
                  id="subject"
                  placeholder='Subject'
                />
                <span style={{color:"red"}}>{subjectError}</span>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="message"
                  name="message"
                  multiline
                  rows={4}
                  style={{width:"100%"}}
                  placeholder="Write Message"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ModeEditOutlineOutlinedIcon style={{color:PrimaryColor,marginBottom:"200%"}}/>
                      </InputAdornment>
                    ),
                  }}
                />
                <span style={{color:"red"}}>{messageError}</span>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} align="center">
            <Button type="submit" style={{marginTop:"4%",backgroundColor:PrimaryColor,color:"white",fontWeight:600,paddingLeft:"4%",paddingRight:"4%",paddingTop:"2%",paddingBottom:"2%"}} size="large">
                  SEND MESSAGE
            </Button>
            </Grid>

            {repeatError !== '' && <Grid 
              item xs={12} sm={12} md={12} 
              style={{marginTop:"5%"}}
              align="center">
            <Alert severity="error">{repeatError}</Alert>
            </Grid>
            }

          {submitSucess !== '' && <Grid 
              item xs={12} sm={12} md={12} 
              style={{marginTop:"5%"}}
              align="center">
            <Alert severity="success">{submitSucess}</Alert>
            </Grid>
            }

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}