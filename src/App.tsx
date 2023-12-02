import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Typography } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./component/Layout";
import Player from "./pages/Player";
import Achievement from "./pages/Achievement";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/player" Component={Player} />
          <Route path="/achievement" Component={Achievement} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
