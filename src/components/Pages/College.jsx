import {useState} from 'react'
import {
    Box,
    Typography,
    useMediaQuery,
    Button,
    Grid,
    Card,
    CardContent,
    CardActions,
    Paper,
    InputBase,

    Container,
    makeStyles

  } from "@material-ui/core";
  import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
  import { Subscribe, GetClientsReview } from "../../api";
  import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
  import { DividerWithText, DividerWithTextInBetween } from "../../common/DividerWithText";
  import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
  import { Link, NavLink } from "react-router-dom";
  import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
  import ChevronRightIcon from "@material-ui/icons/ChevronRight";
  import HomeIcon from "@material-ui/icons/Home";
  import PersonIcon from "@material-ui/icons/Person";
  import Footer from "../Footer";
  import {
    Facebook,
    GooglePlus,
    Instagram,
    Twitter,
  } from "@trejgun/material-ui-icons-social-networks";
  import PrimaryColor from '../../env';
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
  const College = () => {
    const [emailError, setEmailError] = useState('');
    const [email, setEmail] = useState('');
    const onTextChange = (e) => setEmail(e.target.value);


    const servicesCards = [
      {title:"Technical Consultation",src:"https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/icon-6.png",slug:'TC'},
      {title:"Web Solution",src:"https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/icon-5.png",slug:'WebSolution'},
      {title:"UI/UX services",src:"https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/icon-4.png",slug:'UI'},
      {title:"Python Scripting",src:"https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/icon-3.png",slug:'Python'},
      {title:"Testing Services",src:"https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/icon-2.png",slug:'Testing'},
      // {title:"Web Development",src:"https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/icon-01.jpg",slug:'Web'},
     ];
     const classes = useStyles()
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  
    var EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    const subscribe = async () => {
      if (email === "") {
        setEmailError("Please Enter your Email")
        return;
      }
      if (!email.match(EMAIL_REGEX)) {
          setEmailError("Please Enter a valid Email")
          return;
      }
      setEmailError('')
      const boby = {email}
      await Subscribe(boby)
      document.getElementById("email").value = ""
    }


    return (
      <div>
        <article
      style={{
        marginTop:"5%",
        height: "50vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "grid",
   placeItems: "center",
    backgroundImage: `url("https://blog.wiser.com/wp-content/uploads/2015/08/how-buy-one-get-one-can-improve-sales-1074x302@2xC-1296x364.png")`
      }}
    >
      <Container maxWidth="lg">
      <Grid container  style={{display: "flex", alignItems: "center" }}>
            <Grid item xs={12} sm={12} md={12} align="center">
            <div style={{margin:"5%"}}></div>
                  <span style={{color:"white",fontSize:"350%",fontWeight:"bold"}}>
                    Services
                  </span> 
                  <div style={{margin:"1%"}}></div>
                  <span style={{color:"white",fontSize:"120%",fontWeight:"bold"}}>
                    Home || Services
                  </span> 
            </Grid>
          </Grid>
      </Container>
    </article>
        <Box
        sx={{
          // height: "130vh",
          bgcolor: '#f5f5f5',
          width: "100vw",
          
        }}
        style={{paddingTop:"8%",paddingBottom:"8%"}}
      >

      <Container maxWidth="lg" >
        <Grid container maxWidth="lg" justifyContent="center">
        <DividerWithTextInBetween>
                    WHAT WE DO 
          </DividerWithTextInBetween>         
        </Grid>
        <Grid container maxWidth="lg" justifyContent="center" style={{marginTop:"3%"}}>
          <span style={{fontSize:"300%",fontWeight:600}}>We provide exclusive services <br/> for your bussiness  </span>     
        </Grid>
      <Grid container align="left" spacing={4} style={{marginTop:"5%",display: "flex", alignItems: "center" , justifyContent:'center'}}>
      {servicesCards.map( card => (
            <Grid item xs={12} sm={6} md={4} align="center">
            
              <Card maxWidth="lg" style={{padding:"5%",boxShadow: "none",borderRadius:10}}>
              <CardContent>
              <Box
                component="img"
                src={card.src}
                style={{marginTop:"8%",marginBottom:"8%"}}
              />
                <Box style={{marginBottom:"8%"}}>
                  <Typography variant="h5" style={{fontWeight:"bolder"}}>
                    {card.title}
                  </Typography>
                </Box>
                {/* <ul> */}
                <span style={{lineHeight:"26pt"}}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking.
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
              <CardActions>
                <Grid container justify="center">
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
      </Container>
      </Box>
        {isMobile ? (
          <Grid container justify="space-between">
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/">
                <ChevronLeftIcon />
                <Typography variant="button">Home</Typography>
                <HomeIcon style={{ marginLeft: 15 }} />
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/About"
              >
                <PersonIcon style={{ marginRight: 15 }} />
                <Typography variant="button">About</Typography>
                <ChevronRightIcon />
              </Button>
            </Grid>
          </Grid>
        ) : (
          <></>
        )}

<Footer/>
      </div>
    );
  };
  export default College;
  