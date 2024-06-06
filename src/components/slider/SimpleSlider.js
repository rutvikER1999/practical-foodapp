import React from "react";
import cardImage from "../../assets/food-img.png";
import {
  Box,
  Button,
  Card,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import chefIcon from "../../assets/chef.png";
const useStyles = makeStyles({
  root: {
    margin: "0px 10px",
    borderRadius: "16px",
    height: "200px",
    position: "relative",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  Carousel: {
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "40px 0px",
    position: "relative",
  },
  handlers: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: "150px",
    top: "-10px",
  },
  header: {
    position: "absolute",
    display: "flex",
    justifyContent: "start",
    padding: "10px",
    top: 0,
    width: "100%",
    alignItems: "center",
    color: "white",
  },
  footer: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    right:"0",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.5)",
    justifyContent: "space-around",
    padding: "10px 0px"
  },
  money: {
    background: "red",
    borderRadius: "16px",
    color: "white"
  },
  headerLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    color: "white"
  }
});

const SimpleSlider = () => {
  const classes = useStyles();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Box className={classes.container}>
      <Box className={classes.handlers}>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <IconButton>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {new Array(20).fill(0).map((item) => (
          <Card className={classes.root}>
            <img src={cardImage} className={classes.image} />
            <Box className={classes.header}>
              <img src={chefIcon} />
              &nbsp; &nbsp; &nbsp;
              <Typography>juliya something</Typography>
            </Box>
            <Box className={classes.footer}>
              <Box className={classes.headerLeft}>
                <Typography style={{fontSize: "16px", fontWeight: "bold"}}>Maskabun</Typography>
                <Typography style={{fontSize: "12px"}}>Lunch</Typography>
              </Box>
              <Button className={classes.money}>$ 50</Button>
            </Box>
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default SimpleSlider;
