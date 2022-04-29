import React from "react";
import "./Styles/home.css";
import desktopImage from "./Images/homebackground.jpg";
import mobileImage from "./Images/homebackground.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import { NavigationBar } from "./NavBar";
import { Link } from "react-router-dom";
const buttonStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  center: {
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

const Home = () => {
  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
  const bStyles = buttonStyles();
  return (
    <div>
      <NavigationBar />
      <h1>Leave Management System</h1>
      <div
        className="App"
        style={{
          backgroundColor: "white",
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <div className="App-content">
          <h1 style={{ color: "white" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            ></div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;