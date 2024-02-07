
import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import './Home.css';
function Home() {
  const [plainText, setPlainText] = useState("");
  const [encryptionKey, setEncryptionKey] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [decryptedTexts, setDecryptedTexts] = useState([]);

  const handleEncrypt = async () => {
    try {
      const response = await axios.post("http://localhost:5000/encrypt", {
        text: plainText,
        key: parseInt(encryptionKey),
      });
      setCipherText(response.data.encryptedText);
    } catch (error) {
      console.error("Error encrypting text:", error.message);
    }
  };

  const handleDecrypt = async () => {
    try {
      const response = await axios.post("http://localhost:5000/decrypt", {
        text: cipherText,
      });
      setDecryptedTexts(response.data.decryptedTexts);
    } catch (error) {
      console.error("Error decrypting text:", error.message);
    }
  };

  return (
    <div>
   <Container
        maxWidth="lg"
        style={{
          marginTop: "20px",
          padding: "30px",
          textAlign: "center",
        }}
      >
    <Paper elevation={0} style={{ padding: "0px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom style={{ marginBottom: "20px" }}>
        Ceasar Cipher Encryption and Decryption
      </Typography>

      <div style={{ marginBottom: "20px" }}>
        <TextField
          label="Enter Plain Text"
          variant="outlined"
          fullWidth
          value={plainText}
          onChange={(e) => setPlainText(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Enter Encryption Key"
          variant="outlined"
          type="number"
          fullWidth
          value={encryptionKey}
          onChange={(e) => setEncryptionKey(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
          onClick={handleEncrypt}
        >
          Encrypt
        </Button>
      </div>

      {cipherText && (
        <div style={{ marginBottom: "20px" }}>
          <Typography variant="h6" style={{ marginBottom: "10px" }}>
            Encrypted Text:
          </Typography>
          <Typography variant="body1">{cipherText}</Typography>
        </div>
      )}

      <div style={{ marginBottom: "20px" }}>
        <TextField
          label="Enter Cipher Text"
          variant="outlined"
          fullWidth
          value={cipherText}
          onChange={(e) => setCipherText(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
          onClick={handleDecrypt}
        >
          Brute Force Decrypt
        </Button>
      </div>

      {decryptedTexts.length > 0 && (
        <div className="decrypted-texts">
        <Typography variant="h6" className="heading">
          All Possible Decrypted Texts:
        </Typography>
        <List className="decrypted-list">
          {decryptedTexts.map((result) => (
            <ListItem key={result.key} className="decrypted-item">
              <ListItemText>
                <Typography>
                  Key {result.key}: {result.decryptedText}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
      )}
    </Paper>
  </Container>
</div>

  );
}

export default Home;
