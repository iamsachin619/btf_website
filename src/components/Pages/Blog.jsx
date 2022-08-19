import React, { useState, useEffect } from "react";
import { Box, Paper, Container, Grid, Typography, useMediaQuery, Button, makeStyles, InputBase, Divider } from "@material-ui/core";
import { DividerWithText, DividerWithTextInBetween } from "../../common/DividerWithText";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import { GetComments, GetTagsData } from "../../api";
import {
  Facebook,
  GooglePlus,
  Instagram,
  Twitter,
} from "@trejgun/material-ui-icons-social-networks";
import { Subscribe, GetBlogs } from "../../api";
import Footer from "../Footer";
import CommentForm from "../CommentForm";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { responsiveProperty } from "@mui/material/styles/cssUtils";
import PrimaryColor from "../../env";
import Markdown from 'markdown-to-jsx';



const useStyles = makeStyles({
  button: {
    // backgroundColor: '#3c52b2',
    // color: 'bl',
    fontWeight:600,
    paddingLeft:"4%",
    paddingRight:"4%",
    paddingTop:"2%",
    paddingBottom:"2%",
    borderColor:"#e0f2f1",
    borderWidth:2,
    margin:"2%",

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
    // display: "none" 
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const Blog = () => {

  const [blog, setBlog] = useState(null)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [comments, setComments] = useState(null)
  const { title } = useParams();
  const location = useLocation()
  const classes = useStyles()
  const [markData, setMarkData] = useState('')
  const [tags, setTags] = useState([])

  useEffect(async () => {
    
    const tagNames = await GetTagsData(location.state.blog.tags)
    console.log({tagNames})
    setTags(tagNames)
    },[]);


  useEffect( () => {

  

    console.log(location.state.blog.tags)
   
    setBlog(location.state.blog)
    document.getElementById('blog-post-bg').backgroundImage = location.state.blog.img1
    const fetchData = async () => {
      
      

      const resp = await GetComments(location.state.blog.uuid)
      if(resp.status === 200)   
        setComments(resp.data)
    }
  fetchData()
  },[])

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

  const onTextChange = (e) => setEmail(e.target.value);

  return (
    
    <div>
    <article
    className="blog-post-bg"
    id='blog-post-bg'
      style={{
        marginTop:"5%",
        height: "50vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "grid",
    placeItems: "center",
    backgroundImage:blog?`url(${blog.img1})`:'url()',
    boxShadow:'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)'
      }}
    >
      <Container maxWidth="lg">
      <Grid container spacing={8} style={{display: "flex", alignItems: "center" }}>
            <Grid item xs={12} sm={12} md={12} align="center">
                  <span style={{color:"white",fontSize:"350%",fontWeight:"bold"}}>
                    {title}
                  </span> 
                  <div style={{margin:"1%"}}></div>
                  {/* <span style={{color:"white",fontSize:"120%",fontWeight:"bold"}}>
                    Home || image || {title}
                  </span>  */}
            </Grid>
          </Grid>
      </Container>
    </article>

{blog !== null && 
<>
<Container maxWidth="lg">
  <div style={{textAlign:'left'}} className='blogMdContainer'>
    {/* <Markdown>{markData}</Markdown> */}
    <Markdown>{blog.content}</Markdown>
  </div>
</Container>
<Container maxWidth="lg">
      <Grid container spacing={8} style={{marginTop:"8%",display: "flex", alignItems: "center" }}>
      <Grid item xs={12} sm={12} md={12}>
            <Box
        component="img"
        sx={{
          // height: "60vh",
         width: "100%",
         
        }}
        alt="The house from the offer."
        
        src={blog.img1}
      />
     
            </Grid>
            </Grid>
      </Container>

      <Container maxWidth="md">
      
      <Grid container spacing={4} style={{display: "flex", alignItems: "center" }}>
      <Grid item xs={12} sm={12} md={4}></Grid>
      <Grid item xs={12} sm={12} md={8}>
      <Box sx={{ display: 'flex'}}>
      
      <Typography
                style={{color:"grey",verticalAlign: 'middle',marginRight:"3%",
                display: 'inline-flex'}}
            >
              
                 <span style={{color:PrimaryColor,marginRight:"1%"}}><PersonOutlineOutlinedIcon/></span> 
                 {blog.category}
              </Typography>
            <Typography
                style={{color:"grey",verticalAlign: 'middle',whiteSpace:"nowrap",marginRight:"4%",
                display: 'inline-flex'}}
            >
                 <span style={{color:PrimaryColor,marginRight:"4%"}}><EventNoteOutlinedIcon/></span>
                 {blog.pub_date}
              </Typography>
            <Typography
                style={{color:"grey",verticalAlign: 'middle',
                display: 'inline-flex'}}
            >
                 <span style={{color:PrimaryColor,marginRight:"4%"}}><QuestionAnswerOutlinedIcon/> </span>(0)
              </Typography>
        </Box>
            </Grid>
                        </Grid>

      </Container>
     
      {/* <Container maxWidth="md" >
        <Grid container maxWidth="xs" justifyContent="center" style={{marginTop:"3%"}}>
          <span style={{fontSize:"200%",fontWeight:600}}>
          {blog.title}
          </span>     
        </Grid>
      </Container>

      <Container maxWidth="md" >
        <Grid container maxWidth="xs" justifyContent="center" style={{marginBottom:"3%",marginTop:"3%"}}>
          <span style={{color:"grey",fontSize:"120%"}}>
          {blog.content}
          </span>     
        </Grid>
      </Container>

      <Container maxWidth="md" >
        <Grid container maxWidth="xs" justifyContent="center" 
        style={{backgroundColor:"#f5f5f5",paddingTop:"6%",paddingBottom:"6%",marginTop:"3%"}}
        >
          <span style={{fontSize:"150%",fontWeight:600}}>
          {blog.highlight_quote}
          </span>     
        </Grid>
      </Container>  

      <Container maxWidth="lg">
      <Grid container spacing={8} style={{marginTop:"4%",display: "flex", alignItems: "center" }}>
      <Grid item xs={12} sm={12} md={12}>
            <Box
        component="img"
        sx={{
          height: "60vh",
          // width: "100vw",
          
        }}
        alt="The house from the offer."
        
        src={blog.img2}
      />
            </Grid>
            </Grid>
      </Container> */}

      <Container maxWidth="md" >
        <Grid container maxWidth="xs" justifyContent="center" 
        style={{marginTop:"3%"}}
        >
          <span style={{fontSize:"150%",fontWeight:600}}>
         Post Tags
          </span>   
          <div style={{marginLeft:"120%",marginTop:"1%"}}></div> 
          {blog !== null && tags.map( tag => 
            <Button className={classes.button} size="large" variant="outlined">
            {tag}
          </Button>
          )}
 
        </Grid>
      </Container>  

{comments !== null && comments.length !== 0 && 
      <Container maxWidth="md" >
        <Grid container maxWidth="xs" justifyContent="center" 
        style={{marginTop:"3%"}}
        >
           <span style={{fontSize:"150%",fontWeight:600}}>
         Comments
          </span>   
          <div style={{marginLeft:"120%",marginTop:"1%"}}></div> 
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          {comments.map((comment,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {comment.name} : {comment.comment}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </Grid>
      </Container>  
}

      <Container maxWidth="md" >
        <Grid container maxWidth="xs" justifyContent="center" 
        style={{marginTop:"3%"}}
        >
          <span style={{fontSize:"200%",fontWeight:600}}>
         Leave a Reply
          </span>   
          <div style={{marginLeft:"120%"}}></div> 
          <CommentForm uuid={blog.uuid} GetComments={GetComments} setComments={setComments}/>
 
        </Grid>
      </Container>  

</>}

<Footer/>
    </div>
  );
};
export default Blog;
