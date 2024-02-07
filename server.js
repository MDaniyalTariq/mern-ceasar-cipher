// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Ceasar Cipher Encryption Logic (excluding numbers and special characters)
// Ceasar Cipher Encryption Logic (including special characters and numbers)
const encrypt = (text, key) => {
  return text
    .split('')
    .map((char) => {
      if (char.match(/[A-Za-z]/)) {
        const isUpperCase = char === char.toUpperCase();
        const offset = isUpperCase ? 65 : 97;
        const encryptedChar = String.fromCharCode(((char.charCodeAt(0) - offset + key) % 26 + 26) % 26 + offset);
        return encryptedChar;
      }
      return char; // Keep special characters and numbers unchanged
    })
    .join('');
};

// Brute force decryption (including special characters and numbers)
const bruteForceDecrypt = (text) => {
  const decryptedTexts = [];
  for (let key = 0; key < 26; key++) {
    const decryptedText = encrypt(text, -key); // Decryption is just encryption with a negative key
    decryptedTexts.push({ key, decryptedText });
  }
  return decryptedTexts;
};





app.post('/encrypt', (req, res) => {
  const { text, key } = req.body;
  const encryptedText = encrypt(text, key);
  res.json({ encryptedText });
});

app.post('/decrypt', (req, res) => {
  const { text } = req.body;
  const decryptedTexts = bruteForceDecrypt(text);
  res.json({ decryptedTexts });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
