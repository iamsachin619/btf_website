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
import { Subscribe, GetClientsReview, GetComments, GetBlogs } from "../../api";
import Footer from "../Footer";
import PrimaryColor from "../../env";

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
      title: "Server Security",
      src: "https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/icon-3.png",
    },
    {
      title: "Database Analysis",
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
            spacing={8}
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
            <DividerWithText>WHO WE ARE</DividerWithText>
            <div style={{ margin: "5%" }}></div>
            {/* <Typography style={{color:'black',fontSize:'16px',paddingBottom:15,fontWeight:'800'}}> */}
            <span style={{ fontSize: "280%", fontWeight: "bolder" }}>
              More than 23+ years we provide
              <span style={{ color: PrimaryColor }}> IT solutions </span>{" "}
            </span>{" "}
            <br /> <br />
            <span style={{ lineHeight: "26pt" }}>
              Sed ut perspiciatis unde omnis iste natus errorsit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque ipsa
              quae ab illo invetore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem.
              <br />
              <br />
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem
            </span>
            <Button
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
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* ------services section ------------------ */}

      <Box
        sx={{
          width: "100vw",
        }}
        style={{ marginBottom: "8%", paddingTop: "8%", paddingBottom: "8%" }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            align="left"
            spacing={4}
            style={{ display: "flex", alignItems: "center" }}
          >
            {servicesCards.map((card) => (
              <Grid item xs={12} sm={6} md={4} align="center">
                <Card
                  maxWidth="lg"
                  style={{ padding: "5%", boxShadow: "none", borderRadius: 10 }}
                >
                  <CardContent>
                    <Box
                      component="img"
                      src={card.src}
                      style={{ marginTop: "8%", marginBottom: "8%" }}
                    />
                    <Box style={{ marginBottom: "8%" }}>
                      <Typography variant="h5" style={{ fontWeight: "bolder" }}>
                        {card.title}
                      </Typography>
                    </Box>
                    <span style={{ lineHeight: "26pt" }}>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking.
                    </span>
                  </CardContent>
                  <CardActions>
                    <Grid container justify="center">
                      <Button
                        className={classes.button}
                        size="large"
                        variant="outlined"
                        endIcon={<ArrowRightAltIcon />}
                      >
                        Read More
                      </Button>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ----------------- services section end ----------------- */}

      <Box
        sx={{
          // height: "130vh",
          bgcolor: PrimaryColor,
          width: "100vw",
        }}
        style={{ paddingTop: "8%", paddingBottom: "8%" }}
      >
        <Container maxWidth="lg">
          <Grid container style={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={12} sm={12} md={6} align="left">
              <span
                style={{
                  fontSize: "280%",
                  fontWeight: "bolder",
                  color: "white"
                }}
              >
                Let’s Talk About Business Solutions With Us
              </span>
            </Grid>
            <Grid item xs={6} sm={6} md={3} align="right">
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: 600,
                  paddingLeft: "12%",
                  paddingRight: "12%",
                  paddingTop: "6%",
                  paddingBottom: "6%",
                }}
                size="large"
                variant="outlined"
                endIcon={<ArrowRightAltIcon />}
              >
                JOIN WITH US
              </Button>
            </Grid>
            <Grid item xs={6} sm={6} md={3} align="center">
              <Button
                style={{
                  color: "white",
                  fontWeight: 600,
                  paddingLeft: "12%",
                  paddingRight: "12%",
                  paddingTop: "6%",
                  paddingBottom: "6%",
                }}
                size="large"
                startIcon={<PhoneEnabledOutlinedIcon />}
              >
                +812 (345) 789 88
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ------case study section ------------------ */}

      <Box
        sx={{
          // height: "130vh",
          // bgcolor: '#f5f5f5',
          width: "100vw"
        }}
        style={{ marginBottom: "5%", paddingTop: "8%", paddingBottom: "8%" }}
      >
        <Container maxWidth="lg">
          <Grid container maxWidth="lg" justifyContent="center">
            <DividerWithTextInBetween>CASE STUDIES</DividerWithTextInBetween>
          </Grid>
          <Grid
            container
            maxWidth="lg"
            justifyContent="center"
            style={{ marginTop: "3%" }}
          >
            <span style={{ fontSize: "300%", fontWeight: 600 }}>
              Our Latest Case <br /> Studies{" "}
            </span>
          </Grid>
          <Grid
            container
            spacing={4}
            align="left"
            style={{ marginTop: "5%", display: "flex", alignItems: "center" }}
          >
            {caseStudyCards.map((card) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  maxWidth="lg"
                  style={{ boxShadow: "none", borderRadius: 0 }}
                >
                  {/* <CardContent> */}
                  <Box
                    component="img"
                    src={card.src}
                    sx={{
                      height: "37vh",
                      width: "100%",
                    }}
                  />
                  {/* </CardContent> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ----------------- case study section end ----------------- */}

      {/* -------------- Testimonials section -------------------------- */}

      <Container maxWidth="lg">
        <Grid
          container
          spacing={9}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={6} md={6} align="left">
            {/* <Typography>  */}
            <DividerWithText>TESTIMONIALS</DividerWithText>
            <div style={{ margin: "5%" }}></div>
            <span style={{ fontSize: "300%", fontWeight: "bold" }}>
              What Our Client’s Say About us{" "}
            </span>{" "}
            <br /> <br />
            <span style={{ lineHeight: "26pt" }}>
              {reviews !== null && reviews[index].review}
            </span>
            <br />
            <div style={{ marginTop: "5%" }}>
              <span
                style={{
                  lineHeight: "16pt",
                  fontSize: "180%",
                  fontWeight: 600,
                }}
              >
                {reviews !== null && reviews[index].name} <br />
                <span
                  style={{
                    fontSize: "60%",
                    fontWeight: 600,
                    color: PrimaryColor,
                  }}
                >
                  {reviews !== null && reviews[index].post}
                </span>
              </span>
              <Pagination
                classes={{ ul: classes.ul }}
                variant="outlined"
                count={reviews === null ? 0 : 2}
                size="large"
                shape="circular"
                style={{ marginTop: "6%" }}
                onChange={changeIndex}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} align="center">
            <Box
              component="img"
              sx={
                {
                  // height: "50vh",
                  // width: "100vw",
                }
              }
              alt="The house from the offer."
              src="https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/test.png"
            />
          </Grid>
        </Grid>
      </Container>

      {/* ---------------- testimonials section end --------------------- */}

      <Box
        sx={{
          // height: "130vh",
          bgcolor: PrimaryColor,
          width: "100vw"
        }}
        style={{ marginTop: "8%", paddingTop: "8%", paddingBottom: "8%" }}
      >
        <Container maxWidth="lg">
          {/* main tv */}
          <TrackVisibility>
            {({ isVisible }) =>
              isVisible ? (
                <Grid
                  container
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Grid item xs={6} sm={6} md={3} style={{marginBottom:'45px'}}>
                    <PersonIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></PersonIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "300%",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {/* {({ isVisible }) => console.log(isVisible)} */}
                        <span>
                          <AnimatedNumber
                            formatValue={(value) => `${parseInt(value)}`}
                            value={769}
                          />
                          +
                        </span>

                        <br />
                        <span style={{ fontSize: "35%", fontWeight: 400 }}>
                          Expert Developers
                        </span>
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} style={{marginBottom:'45px'}}>
                    <AssignmentTurnedInIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></AssignmentTurnedInIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "300%",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {/* {({ isVisible }) => console.log(isVisible)} */}
                        <span>
                          <AnimatedNumber
                            formatValue={(value) => `${parseInt(value)}`}
                            value={39}
                          />
                          +
                        </span>

                        <br />
                        <span style={{ fontSize: "35%", fontWeight: 400 }}>
                          Expert Developers
                        </span>
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} style={{marginBottom:'45px'}}>
                    <PeopleAltIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></PeopleAltIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "300%",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {/* {({ isVisible }) => console.log(isVisible)} */}
                        <span>
                          <AnimatedNumber
                            formatValue={(value) => `${parseInt(value)}`}
                            value={59}
                          />
                          +
                        </span>

                        <br />
                        <span style={{ fontSize: "35%", fontWeight: 400 }}>
                          Expert Developers
                        </span>
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} style={{marginBottom:'45px'}}>
                    <FavoriteBorderIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></FavoriteBorderIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "300%",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {/* {({ isVisible }) => console.log(isVisible)} */}
                        <span>
                          <AnimatedNumber
                            formatValue={(value) => `${parseInt(value)}`}
                            value={89}
                          />
                          +
                        </span>

                        <br />
                        <span style={{ fontSize: "35%", fontWeight: 400 }}>
                          Expert Developers
                        </span>
                      </span>
                    </div>
                  </Grid>
                </Grid>
              ) : (
                // if not visible
                <Grid
                  container
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Grid item xs={6} sm={6} md={3} style={{marginBottom:'45px'}}>
                    <PersonIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></PersonIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "300%",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {/* {({ isVisible }) => console.log(isVisible)} */}
                        <span>569+</span>

                        <br />
                        <span style={{ fontSize: "35%", fontWeight: 400 }}>
                          Expert Developers
                        </span>
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} style={{marginBottom:'45px'}}>
                    <AssignmentTurnedInIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></AssignmentTurnedInIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "300%",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {/* {({ isVisible }) => console.log(isVisible)} */}
                        <span>569+</span>

                        <br />
                        <span style={{ fontSize: "35%", fontWeight: 400 }}>
                          Expert Developers
                        </span>
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} style={{marginBottom:'45px'}}>
                    <PeopleAltIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></PeopleAltIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "300%",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {/* {({ isVisible }) => console.log(isVisible)} */}
                        <span>569+</span>

                        <br />
                        <span style={{ fontSize: "35%", fontWeight: 400 }}>
                          Expert Developers
                        </span>
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} style={{marginBottom:'45px'}}>
                    <FavoriteBorderIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></FavoriteBorderIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "300%",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {/* {({ isVisible }) => console.log(isVisible)} */}
                        <span>569+</span>

                        <br />
                        <span style={{ fontSize: "35%", fontWeight: 400 }}>
                          Expert Developers
                        </span>
                      </span>
                    </div>
                  </Grid>
                </Grid>
              )
            }
          </TrackVisibility>
        </Container>
      </Box>

      {/*  --------------------- blogs start ----------------------------------------*/}

      <Container maxWidth="lg">
        <Grid
          container
          spacing={9}
          style={{
            marginTop: "6%",
            marginBottom: "3%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={12} md={5} align="left">
            <DividerWithText>OUR BLOG</DividerWithText>
            <div style={{ margin: "5%" }}></div>
            <span style={{ fontSize: "280%", fontWeight: "bold" }}>
              Read Our Latest News & Blog{" "}
            </span>
          </Grid>

          <Grid item xs={12} sm={6} md={4} align="left">
            <Button
              style={{
                backgroundColor: PrimaryColor,
                color: "white",
                fontWeight: 600,
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingTop: "5%",
                paddingBottom: "5%",
              }}
              endIcon={<ArrowRightAltIcon />}
            >
              VIEW ALL NEWS
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid
          container
          style={{
            marginBottom: "8%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item align="left">
            {/* <Box
        component="img"
        sx={{
          
          width: "200px",
          
        }}
        alt="The house from the offer."
        
        src="https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/06.jpg"
      /> */}
          </Grid>
          {/* <Grid item xs={12} sm={12} md={4}>
            <Box
        component="img"
        sx={{
          height: "30vh",
          width: "25vw",
          
        }}
        alt="The house from the offer."
        
        src="https://www.devsnews.com/wp/torun/wp-content/uploads/2019/10/05-1.jpg"
      />
            </Grid> */}
          <Grid item xs={12} sm={12} md={8} align="left">
            {blogs.map((blog) => {
              return (
                <Link
                  to={`/Blog/${blog.title}`}
                  state={{ blog: blog }}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{ display: "flex", height: "30vh", marginTop: "10px" }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ height: "30vh", width: "25vw" }}
                      image={blog.img1}
                      alt="Live from space album cover"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "4%",
                        paddingTop: "3%",
                        paddingBottom: "2.5%",
                      }}
                    >
                      <Box sx={{ display: "flex", marginLeft: "4%" }}>
                        <Typography
                          style={{
                            color: "grey",
                            verticalAlign: "middle",
                            marginRight: "3%",
                            display: "inline-flex",
                          }}
                        >
                          <span
                            style={{ color: PrimaryColor, marginRight: "1%" }}
                          >
                            <PersonOutlineOutlinedIcon />
                          </span>
                          Buythatfits
                        </Typography>
                        <Typography
                          style={{
                            color: "grey",
                            verticalAlign: "middle",
                            whiteSpace: "nowrap",
                            marginRight: "4%",
                            display: "inline-flex",
                          }}
                        >
                          <span
                            style={{ color: PrimaryColor, marginRight: "4%" }}
                          >
                            <EventNoteOutlinedIcon />
                          </span>
                          {blog.pub_date}
                        </Typography>
                        <Typography
                          style={{
                            color: "grey",
                            verticalAlign: "middle",
                            display: "inline-flex",
                          }}
                        >
                          <span
                            style={{ color: PrimaryColor, marginRight: "4%" }}
                          >
                            <QuestionAnswerOutlinedIcon />{" "}
                          </span>
                          ({blog.noOfComments})
                        </Typography>
                      </Box>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography
                          style={{ fontWeight: "bold", fontSize: "150%" }}
                        >
                          {blog.title}
                        </Typography>
                        <Typography style={{ marginTop: "8%", color: "grey" }}>
                          {blog.content}
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Link>
              );
            })}
          </Grid>
        </Grid>
      </Container>

      {/*  --------------------- blogs end ----------------------------------------*/}

      <Footer />
    </div>
  );
};
export default About;
