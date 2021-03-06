import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import profileimage from "../../Components/Images/profileimage.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/" style={{ textDecoration: "none" }}>
         Leave Management System{" "}
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Profile(props) {
  const classes = useStyles();

  const onClick = e => {
    props.history.push("/admindashboard/updateprofile");
  };

  const [adminInfo, setAdminInfo] = React.useState({
    FullName: "",
    OfficeID: "",
    ID: "",
    Email: "",
    Key: "",
    Phone: "",
    IDD: ""
  });
  useEffect(() => {
    if (localStorage.getItem("adminTokken")) {
    } else {
      props.history.push("/emplogin");
    }
    if (adminInfo.FullName === "") {
      axios
        .post("/getadmin", { ID: localStorage.getItem("adminID") })
        .then(res => {
          console.log(res);
          setAdminInfo({
            OfficeID: res.data.OfficeID,
            FullName: res.data.Name,
            ID: res.data.ID,
            Email: res.data.Email,
            Phone: res.data.Phone,
            IDD: localStorage.getItem("adminID")
          });
          console.log(res);
        })
        .catch(error => console.log(error));
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div>
          <Card>
            <CardImg
              top
              width="100%"
              src={profileimage}
              alt="Personal Profile"
            />
            <CardBody>
              <CardTitle
                style={{
                  color: "Black",
                  fontSize: 55,
                  fontFamily: "Arial",
                  textShadow:
                    "-1px -1px 1px #aaa, 1px 5px 2px rgba(255,255,255), 5px 5px 6px rgba(255,255,250), 1px 1px 8px rgba(255,255,240)"
                }}
              >
                Profile
              </CardTitle>
              <CardSubtitle
                style={{
                  color: "Black",
                  fontSize: 25,
                  fontFamily: "Arial",
                  textShadow:
                    "-1px -1px 1px #aaa, 1px 5px 2px rgba(255,255,255), 5px 5px 6px rgba(255,255,250), 1px 1px 8px rgba(255,255,240)"
                }}
              >
                Profile Details
              </CardSubtitle>
              <CardText>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <h3 className="display-6">Name:</h3>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <h5 className="display-6">{adminInfo.FullName}</h5>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <h3 className="display-6">Username:</h3>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <h5 className="display-6">{adminInfo.ID}</h5>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <h3 className="display-6">Office ID:</h3>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <h5 className="display-6">{adminInfo.OfficeID}</h5>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <h3 className="display-6">Email:</h3>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <h5 className="display-6">{adminInfo.Email}:</h5>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <h3 className="display-6">Phone:</h3>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <h5 className="display-6">{adminInfo.Phone}:</h5>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}></Grid>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={onClick}
                  >
                    Update Profile
                  </Button>
                  <Grid container justify="flex-end">
                    <Grid item></Grid>
                  </Grid>
                </form>
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}