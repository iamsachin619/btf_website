import React from 'react'


import {
    Box,
    Paper,
    Container,
    Grid,
    Typography,
    useMediaQuery,
    Button,
    makeStyles,
    InputBase,
    Divider,
    Snackbar,
  } from "@material-ui/core";
  import {} from "@material-ui/core";
  import {
    DividerWithText,
    DividerWithTextInBetween,
  } from "../common/DividerWithText";
  import Card from "@mui/material/Card";
  import CardMedia from "@mui/material/CardMedia";
  import CardActions from "@mui/material/CardActions";
  import CardContent from "@mui/material/CardContent";
  import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
  import PhoneEnabledOutlinedIcon from "@material-ui/icons/PhoneEnabledOutlined";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  
  import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
  import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
  import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
  import Pagination from "@mui/material/Pagination";
  import { NavLink, useNavigate, Link } from "react-router-dom";
  import PrimaryColor from '../env';

const servicesCards = [
    {title:"Technical Consultation",src:"technical consultation",slug:'TC',description:'Our Technical consultation services provide opportunities to improve performance, manage risk and drive the latest innovation.'},
    {title:"Web Solution",src:"web solution",slug:'WebSolution',description:'Relish Web Solutions is an Award-Winning IT Company Offering Various Services, Including Web Design and Website Development. '},
    {title:"UI/UX services",src:"ui ux services",slug:'UI',description:'Innovative UI/UX design services from Relish to help businesses design intuitive solutions to enhance their digital experience.'},
    {title:"Python Scripting",src:"python-_2_",slug:'Python',description:'Relish supports writing custom scripting services in Python to automate your day-to-day tasks.',icon:'python.svg'},
    {title:"Testing Services",src:"testing services",slug:'Testing',description:'Relish takes an innovative approach to application & software testing services to reduce risks, drive quality assurance & improve IT performance.'},
    {title:"MVP",src:"mvp",slug:'MVP', description:'Our MVP development services are tuned to help startups and entrepreneurs turn their idea into scalable and market-worthy products'},
   ];
   const useStyles = makeStyles((theme) => ({
    button: {
      // backgroundColor: '#3c52b2',
      color: PrimaryColor,
      fontWeight: 600,
      paddingLeft: "8%",
      paddingRight: "8%",
      paddingTop: "4%",
      paddingBottom: "4%",
  
      "&:hover": {
        backgroundColor: PrimaryColor,
        color: "white",
      },
    },
  
    ul: {
      "& .MuiPaginationItem-root": {
        backgroundColor: "lightGrey",
        color: "black",
        borderColor: " lightGrey ",
        width: "55px",
        height: "55px",
        borderRadius: "100%",
        // display: "none"
      },
      "& .MuiPaginationItem-page": {
        display: "none",
      },
    },
  
    root: {
      "& .Mui-selected": {
        backgroundColor: "black",
        color: "white",
      },
  
      "& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)":
        {
          backgroundColor: "black",
          color: "white",
        },
    },
    // cardMedia:{
    //   width:'100%',
    //   [theme.breakpoints.down("md")] : {
    //     maxWidth:'200px'
    //     }
    // }
  }));
export default function ServiceCards() {
    const classes = useStyles();
  return (
    <Grid container align="left" spacing={4} style={{marginTop:"5%",display: "flex", alignItems: "stretch" , justifyContent:'center'}}>
      {servicesCards.map( card => (
            <Grid item xs={12} sm={6} md={4} align="center">
            
              <Card maxWidth="lg" style={{padding:"5%",boxShadow: "none",borderRadius:10,height: '93%', display:'flex', flexDirection:'column'}}>
              <CardContent>
              <Box
                className='serviceIcons'
                component="img"
                // src={card.src}
                src={`./assets/icons/${card.src}.svg`}
                style={{marginTop:"8%",marginBottom:"8%",height:'80px'}}
              />
                <Box style={{marginBottom:"8%"}}>
                  <Typography variant="h5" style={{fontWeight:"bolder"}}>
                    {card.title}
                  </Typography>
                </Box>
                {/* <ul> */}
                <span style={{lineHeight:"26pt"}}>
                {card.description}
                </span>
                  {/* {card.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))} */}
                {/* </ul> */}
              </CardContent>
              <CardActions style={{marginTop:'auto'}}>
                <Grid container justify="end">
                  <NavLink to={`/service/${card.slug}`} style={{width:'100%', textDecoration:'none'}}>
                      <Button className={classes.button} size="large" variant="outlined" endIcon={<ArrowRightAltIcon />}>
                        Read More
                      </Button>
                  </NavLink>
                </Grid>
              </CardActions>
            </Card>
            
            </Grid>
      ))}
      </Grid>
  )
}
