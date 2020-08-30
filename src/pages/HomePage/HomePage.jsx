import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { PrimaryAppBar } from "../../components/index";

export const HomePage = React.memo(() => {
  const isUserAuthenticated = useSelector(
    (state) => state.login.isUserAuthenticated
  );
  const userName = useSelector((state) => state.login.userName);

  if (!isUserAuthenticated) {
    return <Redirect to="/signin" />;
  }

  return (
    <>
      <PrimaryAppBar userName={userName} />
      {/* <MainSection userName={userName} /> */}
    </>
  );
});
