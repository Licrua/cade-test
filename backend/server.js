const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/box", (req, res) => {
  const { width, height, length } = req.body;

  const vertices = [
    0, 0, 0, width, 0, 0, width, height, 0, 0, height, 0, // Front face
    0, 0, length, width, 0, length, width, height, length, 0, height, length // Back face
  ];
  
  res.json({ vertices });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
