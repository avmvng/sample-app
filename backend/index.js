import express from "express";
import path from "path";
import mongoose from "mongoose";  // Import Mongoose
import { readFile } from "fs";

// Initialize Express app
const app = express();

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || "your-mongodb-uri-here";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define paths
const __dirname = path.resolve();
const frontendDir = path.join(__dirname, "../frontend");

// Serve static files from frontend and src directories
app.use(express.static(frontendDir));
app.use('/src', express.static(path.join(frontendDir, 'src')));  // Ensures /src/main.jsx is accessible

// Route to serve index.html
app.get('/', (_request, response) => {
  const filePath = path.join(frontendDir, 'index.html');

  readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      console.error("Error reading index.html:", err);
      response.status(500).send('Sorry, something went wrong.');
      return;
    }
    response.send(html);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App available on http://localhost:${PORT}`));
