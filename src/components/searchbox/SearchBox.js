import { Box, Divider, Grid, Input, Select, makeStyles } from "@material-ui/core";
import React from "react";
import dashboardImage from "../../assets/banner-img.png";
import locationIcon from "../../assets/location-pin (2).png";
import searchIcon from "../../assets/Path 4.png";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100vw",
    height: "auto",
    padding: "10px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiInputBase-root:before": {
      borderBottom: "none",
    },
    "& .MuiInputBase-root:after": {
      borderBottom: "none",
    },
    '&:hover .MuiInputBase-root:before': {
      borderBottom: 'none',
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
  searchBox: {
    position: "absolute",
    background: "white",
    borderRadius: "8px",
    display: "flex",
    padding: "8px 12px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "35vw"
  },
  divider: {
    height: "25px",
    width:"1px",
    marginRight: "5px"
  },
  select: {
    width: "20vw"
  },
  search: {
    height: "16px",
    paddingLeft: "10px"
  },
  location: {
    height: "16px",
    paddingRight: "10px"
  }
});

const SearchBox = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img src={dashboardImage} className={classes.image} />
      <Box className={classes.searchBox}>
        <img src={locationIcon} className={classes.location}/>
        <Select
          native
          value={10}
          onChange={() => {}}
          inputProps={{
            name: "age",
            id: "age-native-simple",
          }}
          className={classes.select}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        <Divider orientation="vertical" className={classes.divider} />
        <Input
          className={classes.input}
          defaultValue="Hello world"
          inputProps={{ "aria-label": "description" }}
        />
        <img src={searchIcon} className={classes.search}/>
      </Box>
    </Box>
  );
};

export default SearchBox;
