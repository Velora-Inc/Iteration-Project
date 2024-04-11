// server.js
import express from 'express';
import path from 'path';
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'build')));

app.post('/',
  (req,res) => {
    const data = req.body
    console.log(data)
    res.sendStatus(200)
  }
)
// Handles any requests that don't match the ones above and returns the React app
app.get('*', (req, res) => {
  // console.log(path.join(__dirname, 'build', 'index.html'))
  // res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
