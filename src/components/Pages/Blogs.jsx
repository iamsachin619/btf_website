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
import {
  Facebook,
  GooglePlus,
  Instagram,
  Twitter,
} from "@trejgun/material-ui-icons-social-networks";
import { Subscribe, GetBlogs, GetComments } from "../../api";
import Footer from "../Footer";
import { Routes, Route, NavLink, useNavigate ,Link} from "react-router-dom";
import Blog from "./Blog";
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
      // display: "none"
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

const Blogs = () => {
  const classes = useStyles();
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState([]);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

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
      //setting count
      const {data} = await GetBlogs(1);
      setCount(Math.ceil(data.count/5));

      //getting first 5 blogs
      for(let i = 1 ; i <= 5 ; i++){
        const blogResponse = await GetBlogs(i);
        console.log(blogResponse.data.results[0],'bRRR');
        const blog = blogResponse.data.results[0];
        //const { data } = await GetBlogs(1);
        const comments = await GetComments(blog.uuid)
        console.log('comments',comments)
        console.log('blog',blog)
        // setBlogs(data.results);
        blog.noOfComments = comments.data.length
        setBlogs((prevBlogs)  => [...prevBlogs,blog]);
        console.log('mainstate',blogs)
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

  const changeIndex = async (event, value) => {
    console.log('page no ', value);
    // const { data } = await GetBlogs(value);
    // const comments = await GetComments(data.results[0].uuid);
    // setComments(comments.data);
    // setBlogs(data.results);


    setBlogs([])
    //getting 5 blogs
    value = value * 5;
    for(let i = value-4 ; i <= value ; i++){
      const blogResponse = await GetBlogs(i);
      console.log(blogResponse.data.results[0],'bRRR');
      const blog = blogResponse.data.results[0];
      //const { data } = await GetBlogs(1);
      const comments = await GetComments(blog.uuid)
      console.log('comments',comments)
      console.log('blog',blog)
      // setBlogs(data.results);
      blog.noOfComments = comments.data.length
      setBlogs((prevBlogs)  => [...prevBlogs,blog]);
      console.log('mainstate',blogs)
    }
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
                Blog
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
      <Container maxWidth="md">
      {/* <div class="search" style={{width:'100%', marginTop:"30px"}}>
        <input type="text"placeholder="Search blogs..." style={{width:'88%',paddingBottom:'8px',paddingTop:'8px'}}/>
        <div class="button-src" style={{display: 'inline-block'}}>
            <button style={{width:'100px',paddingBottom:'8px',paddingTop:'8px',backgroundColor:PrimaryColor,borderColor:PrimaryColor, color:'white'}}>Search</button>
        </div>
      </div> */}
      <Paper
                  component="form"
                  elevation={0}
                  sx={{ display: "flex", alignItems: "right", width: "100%" }}
                  style={{ padding: "4%" }}
                >
                  <InputBase
                    sx={{   }}
                    placeholder="Search blogs... "
                    inputProps={{ "aria-label": "Search blogs... " }}
                    onChange={onTextChange}
                    id="email"
                    style={{width:'60%',
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    borderBottom:'1px #cacaca solid'
                  }}
                  />
                  <Button
                  onClick={subscribe}
                  style={{
                    backgroundColor: PrimaryColor,
                    color: "white",
                    fontWeight: 600,
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    marginLeft:'20px'
                  }}
                  size="large"
                 
                >Search</Button>
                </Paper>
</Container>
      {blogs.map((blog) => (
        <>
         <Container maxWidth="md">
        <Grid item xs={12} sm={12} md={12} align="left">

                  <Link
                  to={`/Blog/${blog.title}`}
                  state={{ blog: blog }}
                  style={{ textDecoration: "none" }}
                >
      <Card sx={{ display: 'flex',  marginTop:'35px' ,flexWrap:'wrap'}}>
          
          <CardMedia
            component="img"
            

            sx={{ }}
            image={blog.img1}
            alt="Live from space album cover"
            
          />
          <Box sx={{ display: 'flex', flexDirection: 'column',marginLeft:"4%",paddingTop:"3%",paddingBottom:"2.5%" , width:'100%'}}>
          <Box sx={{ display: 'flex',marginRight:"4%" , justifyContent:'end' }}
          >
                <Typography
                    style={{color:"grey",verticalAlign: 'middle',marginRight:"3%",
                    display: 'inline-flex'}}
                >
                      <span style={{color:PrimaryColor,marginRight:"1%"}}><PersonOutlineOutlinedIcon/></span>Buythatfits
                  </Typography>
                <Typography
                    style={{color:"grey",verticalAlign: 'middle',whiteSpace:"nowrap",marginRight:"4%",
                    display: 'inline-flex'}}
                >
                      <span style={{color:PrimaryColor,marginRight:"4%"}}><EventNoteOutlinedIcon/></span>{blog.pub_date}
                  </Typography>
                <Typography
                    style={{color:"grey",verticalAlign: 'middle',
                    display: 'inline-flex'}}
                >
                      <span style={{color:PrimaryColor,marginRight:"4%"}}><QuestionAnswerOutlinedIcon/> </span>({blog.noOfComments})
                  </Typography>
            </Box>
      <CardContent sx={{ flex: '1 0 auto' , padding:'1%'}}>
      <Typography style={{fontWeight:"bold",fontSize:"150%"}}>
      {blog.title}
      </Typography>
      <Typography style={{marginTop:"20px",color:"grey"}}>
      {blog.highlight_quote}
      </Typography>
      </CardContent>

      </Box>
        </Card>
        </Link>
      </Grid>
      </Container>
          {/* <Container maxWidth="md">
            <Grid
              container
              spacing={8}
              style={{ marginTop: "8%", display: "flex", alignItems: "center" }}
            >
              <Grid item xs={12} sm={12} md={12} style={{ padding: "16px" }}>
                <Box
                  component="img"
                  sx={{
                    // height: "60vh",
                    width: "100%",
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="The house from the offer."
                  src={blog.img1}
                />
              </Grid>
            </Grid>
          </Container>

          <Container maxWidth="md" style={{ marginTop: "12px" }}>
            <Grid
              container
              spacing={4}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent:'end'  ,
                    paddingTop: "0%",
                    paddingBottom: "0%",
                  }}
                >
                  <Box sx={{ display: "flex", marginLeft: "0%",justifyContent:'end' }}>
                    <Typography
                      style={{
                        color: "grey",
                        verticalAlign: "middle",
                        marginRight: "3%",
                        display: "inline-flex",
                      }}
                    >
                      <span style={{ color: PrimaryColor, marginRight: "1%" }}>
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
                      <span style={{ color: PrimaryColor, marginRight: "4%" }}>
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
                      <span style={{ color: PrimaryColor, marginRight: "4%" }}>
                        <QuestionAnswerOutlinedIcon />{" "}
                      </span>
                      ({comments.length})
                    </Typography>
                  </Box>
                  <CardContent sx={{ flex: "1 0 auto", padding: "4px",paddingBottom:'4px' }}>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: "150%",
                        textAlign: "left",
                      }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography
                      style={{
                        marginTop: "10px",
                        color: "grey",
                        textAlign: "left",
                      }}
                    >
                      {blog.content}
                    </Typography>
                  </CardContent>

                  <div style={{marginTop:'18px',display:'flex',justifyContent:'end'}}>
  <NavLink
        to={`/Blog/${blog.title}`}
        state={{ blog: blog }}
        style={{ textDecoration: "none"}}
      > 
      <Button 
      style={{whiteSpace:"nowrap",backgroundColor:PrimaryColor,color:"white",fontWeight:600,padding:'15px'}} 
      endIcon={<ArrowRightAltIcon />}
      >
                  READ MORE
                </Button>  
                 </NavLink>
  </div>
                </Box>
                
              </Grid>
            </Grid>
          </Container>

        */}

         

          
        </>
      ))}

      {count > 1 && (
        <Container maxWidth="md">
          <Grid
            container
            maxWidth="xs"
            justifyContent="center"
            style={{ marginBottom: "8%", marginTop: "3%" }}
          >
            {/* <Pagination
      classes={{ ul: classes.ul }}
      variant="outlined"
      count={count}
      
      shape = "circular"
      onChange={changeIndex}
    />    */}
            <Pagination
              count={count}
              onChange={changeIndex}
              variant="outlined"
              shape="circular"
            />
          </Grid>
        </Container>
      )}

      <Footer />
    </div>
  );
};
export default Blogs;
