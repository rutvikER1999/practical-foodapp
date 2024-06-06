import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "100vw",
    padding: "20px 100px 10px 100px",
    alignItems: "center",
    flexWrap: "wrap"
  },
  logo: {
    border: "2px solid #ee322b",
    background: "white",
    color: "#ee322b",
    borderRadius: "8px",
    padding: "3px 20px",
    cursor: "pointer"
  },
  logoText: {
    color: "#ee322b",
    fontWeight: "900",
  },
  linkText: {
    color: "#613b3b",
    fontWeight: "700",
    padding: "0px 12px",
    textDecoration: "none",
    "&:hover": {
        textDecoration: "underline"
    }
  },
  button: {
    background: "#ee322b",
    color: "white",
    borderRadius: "16px",
    padding: "4px 12px"
  },
  linkContainer: {
    display:"flex",
    alignItems: "center",
    flexWrap: "wrap-reverse"
  }
});

const Header = () => {
  const classes = useStyles();

  let routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Become Chef", path: "/become-chef" },
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <Box container className={classes.root}>
      <Box className={classes.logo}>
        <Typography className={classes.logoText}>Logo</Typography>
      </Box>
      <Box className={classes.linkContainer}>
        {routes.map((route) => (
          <Link className={classes.linkText} to={route.path}>{route.name.toUpperCase()}</Link>
        ))}
        <Button className={classes.button}>GET APP</Button>
      </Box>
    </Box>
  );
};

export default Header;
