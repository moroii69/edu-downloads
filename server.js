const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware to enable CORS
app.use(cors());

// Serve static files from the 'data' directory
app.use('/data', express.static(path.join(__dirname, 'data')));

// Handle other routes
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
