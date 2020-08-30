import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { SignIn } from "../../components";

export const LoginPage = React.memo(() => {
  const { isUserAuthenticated, isLoading, error } = useSelector(
    (state) => state.login
  );

  return (
    <>
      {isUserAuthenticated ? (
        <Redirect to="/"></Redirect>
      ) : (
        <SignIn isLoading={isLoading} error={error}></SignIn>
      )}
    </>
  );
});
