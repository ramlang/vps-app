import cors from 'cors';
import express from 'express';

const PORT = 3000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send("Hewwo is anybody there? @( ◕ x ◕ )@");
});

app.listen(PORT, () => 
  console.log(`Listening on port ${PORT}...`)
);


