
import React from "react";
import { Container, Paper, Typography, TextField, Button, Grid } from "@mui/material";


function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        <Paper elevation={0} className="paper">
          <Typography variant="h4" gutterBottom>
            Contact Me
          </Typography>

          <Typography variant="body1" paragraph>
            If you have any questions or feedback, feel free to reach out to me.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Your Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </form>

          <Typography variant="body1" paragraph style={{ marginTop: "20px" }}>
            Alternatively, you can contact me via email at{" "}
            <strong>m.daniyaltariq9063@encryptify.com</strong>.
          </Typography>

          <Typography variant="body1" paragraph>
            My contact hours are Monday to Friday, 9:00 AM - 5:00 PM.
          </Typography>

          <Typography variant="body1">
            You can also visit me at my office located at:
          </Typography>

          <Typography variant="body1">
            Main Kashmir Road, Sialkot, Pakistan
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default Contact;
