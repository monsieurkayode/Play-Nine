import express from 'express';
import compression from 'compression';
import { resolve } from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.static('dist'));
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, './index.html'));
});

app.listen(port, () => {
  console.log(`Server started on ${port}`); // eslint-disable-line
});
