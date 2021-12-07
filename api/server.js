import express from 'express';
import mongoose from 'mongoose';
import questionRouter from './routes/questionRouter.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGO_URL =
  'mongodb+srv://tut123:tut123@onntek.yusgk.mongodb.net/questionApp?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use('/api/questions', questionRouter);

app.listen(5000, () => {
  console.log(`MongoDB is connected!`);
});
