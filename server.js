const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  const subdomain = req.subdomains[0];
  
  // Add error handling for when no subdomain is given or image doesn't exist
  res.sendFile(path.join(__dirname, 'images', `${subdomain}.jpg`));
});

app.listen(3000, () => console.log('Server is running...'));