import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

// import './database/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333, () => {
  console.log('Server started!');
});