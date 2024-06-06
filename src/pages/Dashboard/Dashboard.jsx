import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchBox from "../../components/searchbox/SearchBox";
import Header from "../../components/header/Header";
import MenuList from "../../components/menu/MenuList";
import SimpleSlider from "../../components/slider/SimpleSlider";

const useStyles = makeStyles({
  root: {},
  title: {
    color: "#fdb821",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  description: {
    color: "#613b3b",
    fontSize: "14px",
    textAlign: "center",
    width: "100%",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Header />
      <SearchBox />
      <MenuList />
      <Typography className={classes.title}>TRENDING CHEF</Typography>
      <Typography className={classes.description}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took
      </Typography>
      <SimpleSlider />;
    </Grid>
  );
};

export default Dashboard;
