import React, { useState, useEffect } from "react";
import menulist from "../../data/menulist.json";
import { Box, Card, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "30px",
    flexWrap: "wrap"
  },
  card: {
    margin: "5px 10px",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minWidth: "89px"
  },
  image: {
    width: "auto",
    height: "auto",
  },
});

const MenuList = () => {
  const classes = useStyles();
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Load images dynamically
    const loadImage = async () => {
      const imageImports = await Promise.all(
        menulist.map(async (menu) => {
          const imageModule = await import(`../../assets/${menu.url}`);
          return {
            name: menu.name,
            image: imageModule.default,
          };
        })
      );
      setImages(imageImports);
    };

    loadImage();
  }, []);

  return (
    <Box className={classes.root}>
      {images.map((menuItem, index) => (
        <Card className={classes.card} variant="outlined" key={index}>
          <img
            src={menuItem.image}
            className={classes.image}
            alt={menuItem.name}
          />
          <Typography>{menuItem.name}</Typography>
        </Card>
      ))}
    </Box>
  );
};

export default MenuList;
