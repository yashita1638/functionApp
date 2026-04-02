const app = require('./app');  // Import the app setup

const PORT = process.env.PORT || 8081;  // Define the port

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});