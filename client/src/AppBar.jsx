
import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import LogoImage from "/svg.svg";
import { Link } from "react-router-dom"; 
import './App.css'

function CustomAppBar() {
  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
      <Toolbar>
        <img
          src={LogoImage}
          alt="Logo"
          style={{
            cursor: "pointer",
            marginRight: "20px",
            maxHeight: "50px",
          }}
        />
        <Typography
          variant="h6"
          style={{
            marginRight: "30%",
            cursor: "pointer",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            color: "black",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            transition: "color 0.3s ease-in-out",
          }}
        >
          Encryptify
        </Typography>
        <Typography variant="h6" className="typewriter-text">
          Code for good, hack ethically, safeguard
        </Typography>
        <div style={{ marginLeft: "auto", color: "black" }}>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
          <Button component={Link} to="/contact" color="inherit">
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
