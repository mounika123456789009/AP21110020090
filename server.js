const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/average', (req, res) => {
  console.log('Received request to calculate average:', req.body);
  const numbers = req.body.numbers;
  
  if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
    console.error('Invalid numbers provided:', numbers);
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  res.json({ average });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
