// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  Container,
  Grid,
  Collapse,
} from "@material-ui/core";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  List,
  ListItemButton,
  ListItemText,
  Button,
  Stack,
  Box,
  SwipeableDrawer,
} from "@mui/material";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import PhoneEnabledOutlinedIcon from "@material-ui/icons/PhoneEnabledOutlined";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
// import HomeIcon from "@material-ui/icons/Home";
// import SchoolIcon from "@material-ui/icons/School";
// import PersonIcon from "@material-ui/icons/Person";
// import BookmarksIcon from "@material-ui/icons/Bookmarks";

import ScrollToTop from "../components/ScrollToTop";
// REACT APP IMPORTS
import Home from "./Pages/Home";
import College from "./Pages/College";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import ContactUs from "./Pages/ContactUs";
import Blog from "./Pages/Blog";
import ServicePage from "./Pages/ServicePage";

import PrimaryColor from "../env";
import BlogAdd from "./Pages/BlogAdd";
import { navItems, title } from "../constant";
// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // alignSelf: 'flex-end'
    display: "flex",
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.threshold,
    target: props.window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBar = (props) => {
  const location = useLocation();
  const path = location.pathname;
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState("right");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [state, setState] = React.useState({
    anchor: false,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleListItemClick = (_event, index) => {
    setSelectedIndex(index);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navItems.map((item, index) => (
          <ListItemButton
            key={index}
            component={Link}
            to={item.link}
            onClick={(event) => handleListItemClick(event, index)}
            selected={selectedIndex === index}
          >
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <div className={classes.root}>
      {/* <HideOnScroll {...props}> */}
      <>
        <AppBar style={{ justify: "center", backgroundColor: "white" }}>
          <Stack direction="column">
            {/* <Box sx={{ bgcolor: '#f5f5f5',height:"8vh" }}>
          <Container maxWidth="lg" style={{marginTop:"1.5vh"}}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} align="left">
            <Stack direction="down" spacing={3} >
            <Typography
                style={{color:"grey",verticalAlign: 'middle',
                display: 'inline-flex'}}
            >
                 <span style={{color:"blue",marginRight:"1%"}}><RoomOutlinedIcon/></span> 15 Hamston Street, West 
              </Typography>
            <Typography
                style={{color:"grey",verticalAlign: 'middle',
                display: 'inline-flex'}}
            >
                 <span style={{color:"blue",marginRight:"4%"}}><PhoneEnabledOutlinedIcon/></span>   812 (345) 6789 
              </Typography>
            <Typography
                style={{color:"grey",verticalAlign: 'middle',
                display: 'inline-flex'}}
            >
                 <span style={{color:"blue",marginRight:"4%"}}><DraftsOutlinedIcon/> </span>  support@gmail.com
              </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
            <span>More than 23+ </span>
            </Grid> 
             <Grid item xs={12} sm={12} md={4}  align="left">
            <span style={{color:"black"}}>
              But I must explain
              </span>
            </Grid>
            
          </Grid>
          </Container>
              </Box> */}
            <Toolbar
              disableGutters
              style={{ marginBottom: "0.8%", marginTop: "0.8%" }}
            >
              <Typography
                variant="h4"
                to="/"
                component={Link}
                // color="textSeconadary"
                className={classes.title}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "none",
                  marginLeft: "5%",
                }}
              >
                {title}
              </Typography>

              {isMobile ? (
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <MenuIcon fontSize="large" style={{ color: "black" }} />
                  </IconButton>
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </>
              ) : (
                <div
                  style={{
                    flexGrow: 1,
                    alignSelf: "flex-center",
                    marginRight: "5%",
                  }}
                >
                  <Stack
                    spacing={2}
                    direction="row"
                    style={{ justifyContent: "end" }}
                  >
                    {navItems.map((item, index) => (
                      <Button
                        key={index}
                        variant="text"
                        component={Link}
                        to={item.link}
                        disableRipple
                        style={{
                          backgroundColor: "transparent",
                          textTransform: "none",
                          color: `${
                            path == item.link ? PrimaryColor : "black"
                          }`,
                          fontWeight: "bold",
                          fontSize: 20,
                          borderBottom: `${
                            path == item.link
                              ? `2px solid ${PrimaryColor}`
                              : "none"
                          }`,
                          borderRadius: "0px",
                        }}
                      >
                        {item.name}
                      </Button>
                    ))}

                    {/* <Button
                    variant="text"
                    component={Link}
                    to="/contact-us"
                    disableRipple
                    style={{whiteSpace: "nowrap",backgroundColor:"transparent" ,textTransform: "none",color:`${path=='/contact-us'?PrimaryColor:'black'}`,fontWeight:"bold",fontSize:20, borderBottom:`${path=='/contact-us'?`2px solid ${PrimaryColor}`:'none'}`}}
                  >
                    Contact Us
                  </Button> */}
                    <Button
                      to="/contact-us"
                      variant="contained"
                      component={Link}
                      endIcon={<ArrowRightAltIcon />}
                      style={{
                        marginLeft: "20px",
                        fontWeight: "bold",
                        paddingLeft: 30,
                        paddingTop: 15,
                        paddingRight: 30,
                        paddingBottom: 15,
                        backgroundColor: PrimaryColor,
                      }}
                    >
                      Contact Us
                    </Button>
                  </Stack>
                </div>
              )}
            </Toolbar>
          </Stack>
        </AppBar>
      </>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/College" element={<College />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Blog/:title" element={<Blog />} />
          <Route exact path="/Blogs" element={<Blogs />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/service/:slug" element={<ServicePage />} />
          <Route exact path="/blogAdd" element={<BlogAdd />} />
        </Routes>
      </ScrollToTop>

      {/* </HideOnScroll> */}
    </div>
  );
};

export default NavBar;
