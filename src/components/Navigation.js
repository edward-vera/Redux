import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
    return (
      <AppBar position="relative">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            FakeCars.com
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li
              className="nav-list-item"
              onClick={() => {
                document.cookie = cookie.serialize("loggedIn", null, {
                  maxAge: 0,
                });
              }}
            >
              Logout
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    );
  };

export default Navigation
