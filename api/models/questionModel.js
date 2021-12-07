import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema(
  {
    questionName: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model('Question', questionSchema);
export default Question;
