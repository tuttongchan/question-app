import express from 'express';
import Question from '../models/questionModel.js';
const questionRouter = express.Router();

// GET ALL QUESTIONS
questionRouter.get('/', async (req, res) => {
  const questions = await Question.find({});
  res.status(200).send(questions);
});

// GET QUESTION
questionRouter.get('/:id', async (req, res) => {
  const question = await Question.findById(req.params.id);
  if (question) {
    res.status(200).json(question);
  } else {
    res.status(404).send({ message: 'Question not found.' });
  }
});

// CREATE QUESTION
questionRouter.post('/', async (req, res) => {
  const question = await Question(req.body);
  const savedQuestion = await question.save();
  res.status(200).send(savedQuestion);
});

// UPDATE QUESTION
questionRouter.put('/:id', async (req, res) => {
  const questionId = req.params.id;
  const question = await Question.findById(questionId);
  if (question) {
    question.questionName = req.body.questionName;

    const updatedQuestion = await question.save();
    res.send({ message: 'Question Updated', question: updatedQuestion });
  } else {
    res.status(404).send({ message: 'Question not found.' });
  }
});

// DELETE QUESTION
questionRouter.delete('/:id', async (req, res) => {
  const question = await Question.findById(req.params.id);
  if (question) {
    await question.delete();
    res.status(200).send({ message: 'Bug has been deleted!' });
  }
});

export default questionRouter;
