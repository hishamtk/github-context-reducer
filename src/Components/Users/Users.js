import { Container, Grid, makeStyles } from "@material-ui/core";

import { useEffect, useContext } from "react";

import GithubContext from "../../Context/GithubContext/GithubContext";

import Spinner from "../Layout/Spinner";
import Search from "./Search";
import UserItem from "./UserItem";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Users = () => {
  const context = useContext(GithubContext);

  const classes = useStyles();
  useEffect(() => {
    context.getAllusers();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Search />
      {context.loading ? (
        <Spinner />
      ) : (
        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            {context.users.map((element) => (
              <UserItem
                key={element.id}
                login={element.login}
                avatar_url={element.avatar_url}
              />
            ))}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default Users;
