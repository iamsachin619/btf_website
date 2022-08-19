import React, { useState, useEffect } from "react";
import { Box, Paper, Container, Grid, Typography, useMediaQuery, Button, makeStyles, InputBase, Divider } from "@material-ui/core";
import { } from "@material-ui/core";
import { DividerWithText, DividerWithTextInBetween } from "../../common/DividerWithText";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import Pagination from '@mui/material/Pagination';
import {
  Facebook,
  GooglePlus,
  Instagram,
  Twitter,
} from "@trejgun/material-ui-icons-social-networks";
import { Subscribe, GetClientsReview } from "../../api";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import PrimaryColor from "../../env";
const useStyles = makeStyles({
  button: {
    // backgroundColor: '#3c52b2',
    color: PrimaryColor,
    fontWeight:600,
    paddingLeft:"8%",
    paddingRight:"8%",
    paddingTop:"4%",
    paddingBottom:"4%",

    '&:hover': {
      backgroundColor: PrimaryColor,
      color: 'white',
  },
},

ul: {
  "& .MuiPaginationItem-root": {
    backgroundColor: "lightGrey",
    color: "black",
    borderColor: ' lightGrey ', 
    width: "55px",
    height: "55px",
    borderRadius: "100%",
    // display: "none" 
  },
  "& .MuiPaginationItem-page": {
    display: "none" 
  }
},

root: {
  "& .Mui-selected": {
    backgroundColor: "black",
    color: "white"
  },

  "& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)": {
    backgroundColor: "black",
    color: "white"
  }
},

})

const Home = () => {

  const classes = useStyles()
  const [email, setEmail] = useState('')


  return (
    
    <div>
    
     <Box
        sx={{
          // height: "130vh",
          bgcolor: '#f5f5f5',
          width: "100vw",
          
        }}
        style={{marginTop:"75px",paddingTop:"5%",paddingBottom:"8%"}}
      >

      <Container maxWidth="md" >
        <Grid container maxWidth="lg" justifyContent="center">
        <DividerWithTextInBetween>
                    CONTACT US 
          </DividerWithTextInBetween>         
        </Grid>
        <Grid container maxWidth="lg" justifyContent="center" style={{marginTop:"3%"}}>
          <span style={{fontSize:"200%",fontWeight:600}}>We provide exclusive services <br/> for your bussiness  </span>     
        </Grid>
      <Grid container align="left" spacing={4} style={{marginTop:"5%",display: "flex", alignItems: "center" }}>
      
            <Grid item xs={12} sm={12} md={12} align="center">
            
              <Card maxWidth="lg" style={{padding:"5%",boxShadow: "none",borderRadius:10}}>
              <CardContent>
               <ContactForm/>
              </CardContent>
            </Card>
            
            </Grid>
      </Grid>
      </Container>
      </Box>

<Footer/>

    </div>
  );
};
export default Home;
