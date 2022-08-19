import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";
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
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {
  DividerWithText,
  DividerWithTextInBetween,
} from "../common/DividerWithText";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PhoneEnabledOutlinedIcon from "@material-ui/icons/PhoneEnabledOutlined";
import {
  Facebook,
  GooglePlus,
  Instagram,
  Twitter,
  Linkedin,
} from "@trejgun/material-ui-icons-social-networks";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Subscribe, GetClientsReview } from "../api";
import { Link } from "react-router-dom";
import PrimaryColor from "../env";
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

export default function Footer() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const onTextChange = (e) => setEmail(e.target.value);

  const [openSnackBar, setOpenSnackBar] = useState(false);
  const handleCloseSnackBar = () => setOpenSnackBar(false);
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
    setOpenSnackBar(true);
    document.getElementById("email").value = "";
  };
  return (
    <React.Fragment>
      {/*  --------------------- footer ----------------------------------------*/}

      <Box
        sx={{
          // height: "130vh",
          bgcolor: "#f5f5f5",
          width: "100vw",
          
        }}
        style={{ paddingTop: "20px", paddingBottom: "5%" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={0} style={{ display: "flex" }}>
            <Grid item xs={12} sm={6} md={3} align="left" style={{marginTop:'30px'}}>
              <Typography
                variant="h4"
                component="p"
                // color="textSeconadary"
                className={classes.title}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  //marginLeft: "7%",
                }}
              >
                <img src="./assets/Option_5.png" width={'150px'}/>
              </Typography>
              <div className="" style={{ marginTop: "20px" }}>
                <Button style={{minWidth: '40px'}}>
                  <Facebook style={{ color: "green" }} />
                </Button>
                <Button style={{minWidth: '40px'}}>
                  <Instagram style={{ color: "green" }} />
                </Button>
                <Button style={{minWidth: '40px'}}>
                  <Twitter style={{ color: "green" }} />
                </Button>
                <Button style={{minWidth: '40px'}}>
                  <Linkedin style={{ color: "green" }} />
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="left" style={{marginTop:'30px'}}>
              {/* <Typography>  */}
              <span style={{ fontWeight: 600, fontSize: "150%" }}>
                Contact Us
              </span>
              <div style={{ marginTop: "8%",marginBottom: "8%" }}>
                <DividerWithText />
              </div>

              
              
              <Button
                disableRipple
                style={{
                  backgroundColor: "transparent",
                  textTransform: "none",
                }}
                startIcon={<LinkedInIcon style={{ color: PrimaryColor }} />}
              >
                <span style={{ fontSize: "120%" }}>
                  Relish <br />{" "}
                </span>
              </Button>
              <div style={{ margin: "3%" }}></div>
              <Button
                disableRipple
                style={{ backgroundColor: "transparent" }}
                startIcon={
                  <PhoneEnabledOutlinedIcon style={{ color: PrimaryColor }} />
                }
              >
                <span style={{ fontSize: "120%" }}>
                  +812 (345) 789 88 <br />{" "}
                </span>
              </Button>
              <div style={{ margin: "3%" }}></div>
              <Button
                disableRipple
                style={{
                  backgroundColor: "transparent",
                  textTransform: "none",
                }}
                startIcon={<DraftsOutlinedIcon style={{ color: PrimaryColor }} />}
              >
                <span style={{ fontSize: "120%" }}>
                  support@gmail.com <br />
                </span>
              </Button>
              <div style={{ margin: "3%" }}></div>
              <Button
                disableRipple
                style={{
                  backgroundColor: "transparent",
                  textTransform: "none",
                }}
                startIcon={<LocationOnOutlinedIcon style={{ color: PrimaryColor }} />}
              >
                <span style={{ fontSize: "120%" }}>
                  227 Marion Street, Columbia <br />
                </span>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="left" style={{marginTop:'30px'}}>
              {/* <Typography>  */}
              <span style={{ fontWeight: 600, fontSize: "150%" }}>
                Our Services
              </span>
              <div style={{ marginTop: "8%", marginBottom: "8%" }}>
                <DividerWithText />
              </div>

              <span style={{ lineHeight: "26pt" }}>
                <Link
                  to="/service/TC"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Technical Consultation
                </Link>
                <br />
                <Link
                  to="/service/WebSolution"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Web Solution
                </Link>
                <br />
                <Link
                  to="/service/UI"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  UI/UX services
                </Link>
                <br />
                <Link
                  to="/service/Python"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Python Scripting
                </Link>
                <br />
                <Link
                  to="/service/Testing"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Testing Services
                </Link>
                <br />
                <Link
                  to="/service/Web"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Web Development
                </Link>
                <br />
              </span>
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="left" style={{marginTop:'30px'}}>
              <Box component="form" noValidate autoComplete="off">
                <Paper
                  component="form"
                  elevation={0}
                  sx={{ display: "flex", alignItems: "center", width: "100%" }}
                  style={{ padding: "4%" }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 2, width: "100%" }}
                    placeholder="Enter Your Email "
                    inputProps={{ "aria-label": "Enter Your Email " }}
                    onChange={onTextChange}
                    id="email"
                    style={{width: "100%"}}
                  />
                </Paper>
                <div style={{ color: "red", marginBottom: "8%" }}>
                  {emailError}
                </div>
                <Button
                  onClick={subscribe}
                  style={{
                    backgroundColor: PrimaryColor,
                    color: "white",
                    fontWeight: 600,
                    paddingLeft: "12%",
                    paddingRight: "12%",
                    paddingTop: "4%",
                    paddingBottom: "4%",
                  }}
                  size="large"
                  endIcon={<ArrowRightAltIcon />}
                >
                  SUBSCRIBE
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
        message="Subscribed Successfully"
      />

      {/*  --------------------- footer ends ----------------------------------------*/}
      <Divider
        style={{ width: "100vw", backgroundColor: "#e0f2f1", height: "0.2vh" }}
      />
      <Box
        sx={{
          // height: "130vh",
          bgcolor: "#f5f5f5",
          width: "100vw",
         
        }}
        style={{ paddingTop: "2%", paddingBottom: "2%" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={0} style={{ display: "flex" }}>
            <Grid item xs={12} sm={12} md={12} align="center">
              <Typography
                style={{
                  color: "grey",
                  verticalAlign: "middle",
                  display: "inline-flex",
                }}
              >
                <CopyrightOutlinedIcon /> Copyright ©2022 Relish Developers. All
                Rights Reserved Copyright
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
