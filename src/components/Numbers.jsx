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
  import PrimaryColor from '../env'
export default function Numbers() {
  return (
    <div>
          <Box
        sx={{
          // height: "130vh",
          bgcolor: PrimaryColor,
          width: "100vw"
        }}
        style={{ marginTop: "4%", paddingTop: "8%", paddingBottom: "4%" }}
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
                    <HailIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></HailIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "250%",
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
                          Happy Clients
                        </span>
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} style={{marginBottom:'45px'}}>
                    <ReceiptLongIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></ReceiptLongIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "250%",
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
                          Projects Completed
                        </span>
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} style={{marginBottom:'45px'}}>
                    <MilitaryTechIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></MilitaryTechIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "250%",
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
                          Years of Experience
                        </span>
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} style={{marginBottom:'45px'}}>
                    <GroupsIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></GroupsIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "250%",
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
                          Team Members
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
                    <HailIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></HailIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "250%",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {/* {({ isVisible }) => console.log(isVisible)} */}
                        <span>569+</span>

                        <br />
                        <span style={{ fontSize: "35%", fontWeight: 400 }}>
                        Happy Clients
                        </span>
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} style={{marginBottom:'45px'}}>
                    <ReceiptLongIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></ReceiptLongIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "250%",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {/* {({ isVisible }) => console.log(isVisible)} */}
                        <span>569+</span>

                        <br />
                        <span style={{ fontSize: "35%", fontWeight: 400 }}>
                        Projects Completed
                        </span>
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} style={{marginBottom:'45px'}}>
                    <MilitaryTechIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></MilitaryTechIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "250%",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {/* {({ isVisible }) => console.log(isVisible)} */}
                        <span>569+</span>

                        <br />
                        <span style={{ fontSize: "35%", fontWeight: 400 }}>
                        Years of Experience
                        </span>
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3} style={{marginBottom:'45px'}}>
                    <GroupsIcon
                      style={{ fontSize: "400%", color: "white" }}
                    ></GroupsIcon>
                    <div style={{ marginTop: "10%" }}>
                      <span
                        style={{
                          lineHeight: "16pt",
                          fontSize: "250%",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {/* {({ isVisible }) => console.log(isVisible)} */}
                        <span>569+</span>

                        <br />
                        <span style={{ fontSize: "35%", fontWeight: 400 }}>
                        Team Members
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
    </div>
  )
}
