import * as React from 'react';
import { makeStyles } from "@material-ui/core";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import EditIcon from '@mui/icons-material/Edit';
import LanguageIcon from '@mui/icons-material/Language';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import { PostComment } from './../api';
import { useState } from 'react';
import PrimaryColor from '../env';
const theme = createTheme();

const useStyles = makeStyles({
    root : {
        "& .MuiOutlinedInput-root": {
        "& > fieldset": {
          borderColor: "white",
        }
      },
      "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            borderColor: "white"
          }
        }
    },
})

export default function CommentForm({ uuid, GetComments, setComments }) {

  const classes = useStyles()

  const [emailError, setEmailError] = useState('')
  const [nameError, setNameError] = useState('')
  const [commentError, setCommentError] = useState('')
  const [websiteError, setWebsiteError] = useState('')
  const[submitSucess,SetSubmitSucess] = useState('')

  var EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var URL_REGEX = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    

    if (data.get('comment') === "") {
      setCommentError("Please Enter the Comment")
      return;
    }
    setCommentError('')

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

    if (data.get('website') === "") {
      setWebsiteError("Please Enter the Website")
      return;
    }
    if (!data.get('website').match(URL_REGEX) ) {
      
        setWebsiteError("Please Enter a valid Website")
        return;
    }
    setWebsiteError('')
    if(!data.get('website').includes("http")){
      data.set('website', "http://" + data.get('website'))
    }

    if(nameError === '' && emailError === '' && websiteError === '' && commentError === ''){
    const body = {
      name: data.get('name'),
      email: data.get('email'),
      comment: data.get('comment'),
      website:data.get('website'),
      blog_uuid:uuid
    };
    console.log(body)
    const resp = await PostComment(body)
    console.log(resp)
    if(resp.status === 200){
      SetSubmitSucess("Commented Successfully")

      document.getElementById("name").value = ""
      document.getElementById("email").value = ""
      document.getElementById("comment").value = ""
      document.getElementById("website").value = ""
      
      //updating comments
      const resp = await GetComments(uuid)
      if(resp.status === 200)   
        setComments(resp.data)
    }
    }
     

  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <Box
          sx={{
            backgroundColor:"#f5f5f5",
            marginTop: 2,
            marginBottom: 8,
            paddingLeft:8,
            paddingRight:8,
            paddingTop:4,
            paddingBottom:4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="comment"
                  name="comment"
                  multiline
                  variant='outlined'
                  rows={5}
                  style={{backgroundColor:"white", width:"100%"}}
                  placeholder="Your Comments...."
                  className={classes.root}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EditIcon style={{color:PrimaryColor,marginBottom:"300%"}}/>
                      </InputAdornment>
                    ),
                  }}
                />
                <span style={{color:"red"}}>{commentError}</span>  
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  style={{backgroundColor:"white"}}
                  placeholder='Your Name....'
                  className={classes.root}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon style={{color:PrimaryColor}}/>
                      </InputAdornment>
                    ),
                  }}
                />
                <span style={{color:"red"}}>{nameError}</span>  
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  style={{backgroundColor:"white"}}
                  placeholder='Your Email....'
                  className={classes.root}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MailIcon style={{color:PrimaryColor}}/>
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
                  name="website"
                  id="website"
                  style={{backgroundColor:"white"}}
                  placeholder='Your Website....'
                  className={classes.root}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LanguageIcon style={{color:PrimaryColor}}/>
                      </InputAdornment>
                    ),
                  }}
                />
                <span style={{color:"red"}}>{websiteError}</span>  
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} align="center">
            <Button type="submit" style={{marginTop:"4%",backgroundColor:PrimaryColor,color:"white",fontWeight:600,paddingLeft:"4%",paddingRight:"4%",paddingTop:"2%",paddingBottom:"2%"}} size="large">
                  POST COMMENT
            </Button>
            </Grid>

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