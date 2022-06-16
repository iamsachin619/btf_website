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
  import { Link , useParams, useLocation} from "react-router-dom";
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
  import servicesData from '../../data/data'
  const useStyles = makeStyles({
    button: {
      // backgroundColor: '#3c52b2',
      color: 'blue',
      fontWeight:600,
      paddingLeft:"8%",
      paddingRight:"8%",
      paddingTop:"4%",
      paddingBottom:"4%",
  
      '&:hover': {
        backgroundColor: 'blue',
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
  const ServicePage = () => {
    const [emailError, setEmailError] = useState('');
    const [email, setEmail] = useState('');
    const onTextChange = (e) => setEmail(e.target.value);
    const {slug} = useParams();

    const location = useLocation();
    const path = location.pathname;

    console.log(slug)
    console.log(servicesData[slug])
    const data = servicesData[slug]

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
      <Grid container spacing={8} style={{display: "flex", alignItems: "center" }}>
            <Grid item xs={12} sm={12} md={12} align="center">
            <div style={{margin:"5%"}}></div>
                  <span style={{color:"white",fontSize:"350%",fontWeight:"bold"}}>
                    {data.title}
                  </span> 
                  <div style={{margin:"1%"}}></div>
                  <span style={{color:"white",fontSize:"120%",fontWeight:"bold"}}>
                    Home || Services || {data.title}
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
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        style={{paddingTop:"2%",paddingBottom:"8%" ,backgroundColor:'white'}}
      >

      <Container maxWidth="lg" >
        {/* <Grid container maxWidth="lg" justifyContent="center">
        <DividerWithTextInBetween>
                   {data.title}
          </DividerWithTextInBetween>         
        </Grid> */}
        <Grid container spacing={2}>
          
        <Grid className='presentService'  lg={8} style={{padding:'3%'}}>
          <Grid  maxWidth="lg" justifyContent="left" style={{marginTop:"0%",textAlign:'left'}}>
            <span style={{fontSize:"300%",fontWeight:600}}>{data.title}  </span>     
          </Grid>
          <Grid  maxWidth="lg" justifyContent="center" style={{marginTop:"2%"}}>
              <img src={data.img1} style={{width:"100%",height:"100%"}}/>
          </Grid>
          <Grid  maxWidth="lg" justifyContent="center" style={{marginTop:"2%", textAlign:'justify'}}>
              {data.content}
          </Grid>
        </Grid>
        <Grid className='otherService' lg={3} justifyContent="left" style={{textAlign:'left',marginLeft:'25px'}}>
          <div style={{marginTop:"20px"}}>
          <span style={{fontSize:"200%",fontWeight:400}}>Other Services  </span>  
          </div>
          <div style={{ marginTop: "8%", marginBottom: "3%" }}>
                <DividerWithText />
              </div>
          <span style={{ lineHeight: "26pt" }}>
                <Link
                  to="/service/Marketing"
                  style={{ textDecoration: "none", color: path=="/service/Marketing"?"blue":'black' }}
                >
                  Marketing Strategy
                </Link>
                <br />
                <Link
                  to="/service/Analysis"
                  style={{ textDecoration: "none", color: path=="/service/Analysis"?"blue":'black' }}
                >
                  Analysis For Tools
                </Link>
                <br />
                <Link
                  to="/service/UI"
                  style={{ textDecoration: "none", color:  path=="/service/UI"?"blue":'black' }}
                >
                  UX/UI Strategy
                </Link>
                <br />
                <Link
                  to="/service/Server"
                  style={{ textDecoration: "none", color:  path=="/service/Server"?"blue":'black'}}
                >
                  Server Security
                </Link>
                <br />
                <Link
                  to="/service/Database"
                  style={{ textDecoration: "none", color:  path=="/service/Database"?"blue":'black'}}
                >
                  Database Analysis
                </Link>
                <br />
                <Link
                  to="/service/Web"
                  style={{ textDecoration: "none", color:  path=="/service/Web"?"blue":'black' }}
                >
                  Web Development
                </Link>
                <br />
              </span>
        </Grid>
        
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
  export default ServicePage;
  