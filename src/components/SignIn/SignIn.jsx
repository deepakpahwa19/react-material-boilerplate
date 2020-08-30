import React, { useCallback, useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Container,
  makeStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch } from "react-redux";
import { Spinner } from "../index";
import * as actions from "../../redux/actions/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    color: "red",
  },
}));

export const SignIn = React.memo(({ isLoading, error }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("ashu+interview@enterprisebot.org");
  const [password, setPassword] = useState("Intervi3w");

  const loginHandler = useCallback(
    (event) => {
      event.persist();
      event.preventDefault();
      dispatch(actions.loginAction(email, password));
    },
    [email, password, dispatch]
  );

  const userNameHandler = useCallback(
    (event) => {
      event.persist();
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const passwordHandler = useCallback(
    (event) => {
      event.persist();
      setPassword(event.target.value);
    },
    [setPassword]
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={loginHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email*"
            placeholder="Email"
            name="Email"
            autoComplete="Email"
            autoFocus
            value={email}
            onChange={userNameHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password*"
            placeholder="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={passwordHandler}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
});
