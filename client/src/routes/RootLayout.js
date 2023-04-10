import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const RootLayout = () => {
  return (
    <main>
      <MainHeader />
      <Outlet />
    </main>
  );
};

export default RootLayout;
