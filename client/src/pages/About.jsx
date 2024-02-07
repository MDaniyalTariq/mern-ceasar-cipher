import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import "./About.css";
import "../App.css";

function About() {
  return (
    <div>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        <Paper
          elevation={0}
          className="about-paper" 
        >
          <Typography variant="h4" gutterBottom className="about-heading">
            About Encryptify
          </Typography>

          <Typography variant="overline" paragraph className="about-text">
            Welcome to Encryptify, your go-to platform for secure communication
            using Caesar Cipher Encryption and Decryption. This application is a
            semester assignment for Information Security, showcasing innovative
            solutions for safeguarding your messages.
          </Typography>

          <Typography variant="body2" paragraph className="about-text">
            <strong>About Developer:</strong>
            <ul className="about-list">
              <li>M. Daniyal Tariq - Full Stack Developer</li>
            </ul>
          </Typography>

          <Typography variant="body2" paragraph className="about-text">
            <strong>Key Features:</strong>
            <ul className="about-list">
              <li>Simple and Secure Encryption/Decryption</li>
              <li>Brute Force Decryption Option</li>
              <li>User-friendly Interface</li>
              
            </ul>
          </Typography>

          <Typography variant="body2" paragraph className="about-text">
            <strong>Technologies Used:</strong>
            <ul className="about-list">
              <li>React for the Frontend</li>
              <li>Node.js and Express for the Backend</li>
              <li>Material-UI for UI Components</li>
              <li>Caesar Cipher Algorithm for Encryption/Decryption</li>
              
            </ul>
          </Typography>

          <Typography variant="body2" paragraph className="about-text">
            <strong>How it Works:</strong>
            <ul className="about-list">
              <li>Enter your plain text and encryption key.</li>
              <li>Click "Encrypt" to secure your message.</li>
              <li>
                Use the "Brute Force Decrypt" option to explore possible
                decryptions.
              </li>
              
            </ul>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default About;
