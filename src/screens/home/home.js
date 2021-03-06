import React from "react";

import UINavBar from "app/components/UI/navbar/navbar";
import HomeComponent from "app/components/home/home";

const home = ({ type }) => {
  return (
    <>
      <UINavBar type={type} />
      <HomeComponent />
    </>
  );
};

export default home;
