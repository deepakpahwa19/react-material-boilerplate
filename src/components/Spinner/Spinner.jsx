import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      margin: theme.spacing(2),
    },
    height: "500px",
  },
}));

export const Spinner = React.memo((props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress style={{ margin: "auto" }} />
    </div>
  );
});
