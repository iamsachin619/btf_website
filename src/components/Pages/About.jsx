import React, { useState, useEffect } from "react";
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
} from "@material-ui/core";
import {} from "@material-ui/core";
import {
  DividerWithText,
  DividerWithTextInBetween,
} from "../../common/DividerWithText";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PhoneEnabledOutlinedIcon from "@material-ui/icons/PhoneEnabledOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import Pagination from "@mui/material/Pagination";
import AnimatedNumber from "animated-number-react";
import TrackVisibility from "react-on-screen";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import {
  Facebook,
  GooglePlus,
  Instagram,
  Twitter,
} from "@trejgun/material-ui-icons-social-networks";
import { Link } from "react-router-dom";
import HailIcon from '@mui/icons-material/Hail';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import GroupsIcon from '@mui/icons-material/Groups';
import { Subscribe, GetClientsReview, GetComments, GetBlogs } from "../../api";
import Footer from "../Footer";
import PrimaryColor from "../../env";
import Numbers from "../Numbers";


const useStyles = makeStyles({
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
});

const About = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [reviews, setReviews] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [blogs, setBlogs] = useState([]);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const servicesCards = [
    {
      title: "Python Scripting",
      src: "https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/icon-3.png",
    },
    {
      title: "Testing Services",
      src: "https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/icon-2.png",
    },
    {
      title: "Web Development",
      src: "https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/icon-01.jpg",
    },
  ];
  const caseStudyCards = [
    {
      src: "https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/06.jpg",
    },
    {
      src: "https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/06.jpg",
    },
    {
      src: "https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/06.jpg",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await GetClientsReview();
      setReviews(data);
      //get 2 latest blogs
      for (let i = 1; i < 3; i++) {
        const { data } = await GetBlogs(i);
        console.log(data, "data");
        const comment = await GetComments(data.results[0].uuid);
        console.log(comment.data.length, "comment");
        setBlogs((prevBlogs) => [
          ...prevBlogs,
          { ...data.results[0], noOfComments: comment.data.length },
        ]);
      }
    };
    fetchData();
  }, []);

  var EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const subscribe = async () => {
    if (email === "") {
      setEmailError("Please Enter your Email");
      return;
    }
    if (!email.match(EMAIL_REGEX)) {
      setEmailError("Please Enter a valid Email");
      return;
    }
    setEmailError("");
    const boby = { email };
    await Subscribe(boby);
    document.getElementById("email").value = "";
  };

  const changeIndex = (event, value) => {
    setIndex(value - 1);
  };

  const onTextChange = (e) => setEmail(e.target.value);

  return (
    <div>
      <article
        style={{
          marginTop: "5%",
          height: "50vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "grid",
          placeItems: "center",
          backgroundImage: `url("https://blog.wiser.com/wp-content/uploads/2015/08/how-buy-one-get-one-can-improve-sales-1074x302@2xC-1296x364.png")`,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            style={{ display: "flex", alignItems: "center" }}
          >
            <Grid item xs={12} sm={12} md={12} align="center">
              <span
                style={{ color: "white", fontSize: "350%", fontWeight: "bold" }}
              >
                About Us
              </span>
              <div style={{ margin: "1%" }}></div>
              <span
                style={{ color: "white", fontSize: "120%", fontWeight: "bold" }}
              >
                Home
              </span>
            </Grid>
          </Grid>
        </Container>
      </article>
      {/* what is relish */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={8}
          style={{ marginTop: "5%", display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Box
              component="img"
              sx={{
                height: "70vh",
                // width: "100vw",
              }}
              alt="The house from the offer."
              src="https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/02-3.png"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} align="left">
            <DividerWithText>
              {/* text here */}
            </DividerWithText>
            <div style={{ margin: "5%" }}></div>
            {/* <Typography style={{color:'black',fontSize:'16px',paddingBottom:15,fontWeight:'800'}}> */}
            <span style={{ fontSize: "280%", fontWeight: "bolder" }}>
            What is 
              <span style={{ color: PrimaryColor }}> Relish</span>{" "}?
            </span>{" "}
            <br/><br/>
            <span style={{ lineHeight: "26pt" }}>
            Relish, a professionally managed fast growing IT Company offering cutting edge IT solutions for small and medium enterprises for the last five years. We are among the revolutionary web marketing and software development companies in India catering to diverse needs of small and medium business enterprises. We have delivered a wide category of projects across diverse solutions including E-Commerce, Dynamic Website, and Static Websites for diverse businesses including Real Estate, Media & Entertainment, Finance, NGOs, Education, Culture etc
              <br />
             
            </span>
            {/* <Button
              style={{
                marginTop: "5%",
                paddingLeft: "7%",
                paddingRight: "7%",
                paddingTop: "3%",
                paddingBottom: "3%",
                backgroundColor: PrimaryColor,
                color: "white",
              }}
              size="large"
              variant="outlined"
              endIcon={<ArrowRightAltIcon />}
            >
              Learn More
            </Button> */}
          </Grid>
        </Grid>
      </Container>

      {/* our vision */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={8}
          style={{ marginTop: "5%", display: "flex", alignItems: "center" }}
        >
              <Grid item xs={12} sm={12} md={6} align="left">
                <DividerWithText>
                  {/* text here */}
                  
                </DividerWithText>
                <div style={{ margin: "5%" }}></div>
                {/* <Typography style={{color:'black',fontSize:'16px',paddingBottom:15,fontWeight:'800'}}> */}
                <span style={{ fontSize: "280%", fontWeight: "bolder" }}>
                Our
                  <span style={{ color: PrimaryColor }}> Vision</span>{" "}
                </span>{" "}
                <br/><br/>
                <span style={{ lineHeight: "26pt" }}>
                We at Relish cherish the vision of delivering high-end, global quality IT solutions that fosters the growth of small and medium businesses. Developed and designed by well qualified and highly matured professionals our solutions are oriented to foster overall organisational development.
                  <br />
                 
                </span>
                {/* <Button
                  style={{
                    marginTop: "5%",
                    paddingLeft: "7%",
                    paddingRight: "7%",
                    paddingTop: "3%",
                    paddingBottom: "3%",
                    backgroundColor: PrimaryColor,
                    color: "white",
                  }}
                  size="large"
                  variant="outlined"
                  endIcon={<ArrowRightAltIcon />}
                >
                  Learn More
                </Button> */}
              </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              component="img"
              sx={{
                height: "70vh",
                // width: "100vw",
              }}
              alt="The house from the offer."
              src="https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/02-3.png"
            />
          </Grid>
        </Grid>
      </Container>

      {/* our mission */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={8}
          style={{ marginTop: "5%", display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Box
              component="img"
              sx={{
                height: "70vh",
                // width: "100vw",
              }}
              alt="The house from the offer."
              src="https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/02-3.png"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} align="left">
            <DividerWithText>
              {/* text here */}
            </DividerWithText>
            <div style={{ margin: "5%" }}></div>
            {/* <Typography style={{color:'black',fontSize:'16px',paddingBottom:15,fontWeight:'800'}}> */}
            <span style={{ fontSize: "280%", fontWeight: "bolder" }}>
            Our 
              <span style={{ color: PrimaryColor }}> Mission</span>{" "}
            </span>{" "}
            <br/><br/>
            <span style={{ lineHeight: "26pt" }}>
            We nurture the mission of being India’s top web designing and software development firm with higher ethical standards and delivering world class IT solutions.  <br />
             
            </span>
            {/* <Button
              style={{
                marginTop: "5%",
                paddingLeft: "7%",
                paddingRight: "7%",
                paddingTop: "3%",
                paddingBottom: "3%",
                backgroundColor: PrimaryColor,
                color: "white",
              }}
              size="large"
              variant="outlined"
              endIcon={<ArrowRightAltIcon />}
            >
              Learn More
            </Button> */}
          </Grid>
        </Grid>
      </Container>

      {/* Who We Are */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={8}
          style={{ marginTop: "5%", display: "flex", alignItems: "center" }}
        >
              <Grid item xs={12} sm={12} md={6} align="left">
                <DividerWithText>
                  {/* text here */}
                  
                </DividerWithText>
                <div style={{ margin: "5%" }}></div>
                {/* <Typography style={{color:'black',fontSize:'16px',paddingBottom:15,fontWeight:'800'}}> */}
                <span style={{ fontSize: "280%", fontWeight: "bolder" }}>
                Who
                  <span style={{ color: PrimaryColor }}> We</span>{" "}Are
                </span>{" "}
                <br/><br/>
                <span style={{ lineHeight: "26pt" }}>
                We deliver enterprise-grade web solutions that power strategic work processes and workflows. <br />
                 
                </span>
                {/* <Button
                  style={{
                    marginTop: "5%",
                    paddingLeft: "7%",
                    paddingRight: "7%",
                    paddingTop: "3%",
                    paddingBottom: "3%",
                    backgroundColor: PrimaryColor,
                    color: "white",
                  }}
                  size="large"
                  variant="outlined"
                  endIcon={<ArrowRightAltIcon />}
                >
                  Learn More
                </Button> */}
              </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              component="img"
              sx={{
                height: "70vh",
                // width: "100vw",
              }}
              alt="The house from the offer."
              src="https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/02-3.png"
            />
          </Grid>
        </Grid>
      </Container>

      {/* our dna */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={8}
          style={{ marginTop: "5%", display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Box
              component="img"
              sx={{
                height: "70vh",
                // width: "100vw",
              }}
              alt="The house from the offer."
              src="https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/02-3.png"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} align="left">
            <DividerWithText>
              {/* text here */}
            </DividerWithText>
            <div style={{ margin: "5%" }}></div>
            {/* <Typography style={{color:'black',fontSize:'16px',paddingBottom:15,fontWeight:'800'}}> */}
            <span style={{ fontSize: "280%", fontWeight: "bolder" }}>
            Our 
              <span style={{ color: PrimaryColor }}> DNA</span>{" "}
            </span>{" "}
            <br/><br/>
            <span style={{ lineHeight: "26pt" }}>
            As we provide IT Consulting Services, Focused on constant innovation as our key for achieving the ultimate goal of success and emerged as a globally recognized Digitally Transformation Consultancy by providing superior quality services and solutions. 
            </span>
            {/* <Button
              style={{
                marginTop: "5%",
                paddingLeft: "7%",
                paddingRight: "7%",
                paddingTop: "3%",
                paddingBottom: "3%",
                backgroundColor: PrimaryColor,
                color: "white",
              }}
              size="large"
              variant="outlined"
              endIcon={<ArrowRightAltIcon />}
            >
              Learn More
            </Button> */}
          </Grid>
        </Grid>
      </Container>


      {/* ------services section ------------------ */}

      

      {/* ----------------- services section end ----------------- */}

    

      {/* ------case study section ------------------ */}

      
      {/* ----------------- case study section end ----------------- */}

      {/* -------------- Testimonials section -------------------------- */}

     

      {/* ---------------- testimonials section end --------------------- */}

{/* numbers */}
          <Numbers/>

      {/*  --------------------- blogs start ----------------------------------------*/}

     
       {/* --------------------- blogs end ---------------------------------------- */}

      <Footer />
    </div>
  );
};
export default About;
