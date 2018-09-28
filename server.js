import express from 'express';
import { resolve } from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(resolve(__dirname, '../dist')));
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, './index.html'));
});

app.listen(port, () => {
  console.log(`Server started on ${port}`); // eslint-disable-line
});
