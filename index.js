// Import required modules
const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();

// Enable CORS
app.use(cors()); // This will allow all origins by default

// Sample API route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Another example API route
app.get('/api/data', (req, res) => {
  res.json({ data: [1, 2, 3, 4, 5] });
});



// Define the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


console.log('fsdafsda');