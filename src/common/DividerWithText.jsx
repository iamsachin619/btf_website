import React from "react";
import { makeStyles } from "@material-ui/core";
import PrimaryColor from "../env";
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center"
  },
  border: {
    borderBottom: `4px solid ${PrimaryColor}`,
    width: "35%"
  },
  content: {
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 18,
    color: PrimaryColor,
    width:250
  }
}));

const DividerWithText = ({ children }) => {
 const classes = useStyles();
 return (
  <div className={classes.container}>
    <div className={classes.border} style={{width:"5%"}}/>
    <div className={classes.border} style={{marginLeft:10,width:"13%"}}/>
    <span className={classes.content}>{children}</span>
  </div>
 );
};

const DividerWithTextInBetween = ({ children }) => {
  const classes = useStyles();
  return (
   <div className={classes.container}>
     <div className={classes.border} />
     <span className={classes.content}>{children}</span>
     <div className={classes.border}/>
   </div>
  );
};

export { DividerWithText, DividerWithTextInBetween}