
import React from "react";
import { Typography, Container } from "@mui/material";

function Footer() {
  return (
    <footer style={{ position: "fixed", bottom: 0, width: "100%", padding: "10px", backgroundColor: "#f0f0f0", textAlign: "center" }}>
      <Container>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Encryptify-By-Daniyal Tariq. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
