import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";

import About from "./Components/Layout/About";
import AlertItem from "./Components/Layout/AlertItem";
import Contact from "./Components/Layout/Contact";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import Profile from "./Components/Users/Profile";
import Users from "./Components/Users/Users";

import GithubState from "./Context/GithubContext/GithubState";
import AlertState from "./Context/AlertContext/AlertState";

const useStyles = makeStyles((theme) => ({
  hero: {
    padding: theme.spacing(8, 0, 6),
    minHeight: "75vh", // to set the footer to bottom
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />

      <Navbar />
      <GithubState>
        <AlertState>
          <Container className={classes.hero} maxWidth="lg">
            <AlertItem />
            <Switch>
              <Route exact path="/github">
                <Users />
              </Route>
              <Route exact path="/github/about">
                <About />
              </Route>
              <Route exact path="/github/contact">
                <Contact />
              </Route>
              <Route
                exact
                path="/github/user/:userId"
                render={(props) => <Profile {...props} />}
              />
            </Switch>
          </Container>
        </AlertState>
      </GithubState>

      <Footer />
    </Fragment>
  );
};

export default App;
