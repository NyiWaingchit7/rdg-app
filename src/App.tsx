import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Typography } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./component/Layout";
import Player from "./pages/Player";
import Achievement from "./pages/Achievement";
import PlayerDetail from "./component/PlayerDetail";
import HeadDetail from "./component/HeadDetail";
import Fixture from "./pages/Fixture";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/head/:id" Component={HeadDetail} />
          <Route path="/player" Component={Player} />
          <Route path="/player/:id" Component={PlayerDetail} />

          <Route path="/achievement" Component={Achievement} />
          <Route path="/fixture" Component={Fixture} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
