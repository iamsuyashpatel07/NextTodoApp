import { Task } from '../../models/task';
import { connectDB } from '../../utils/features';

const handler = async (req, res) => {
  await connectDB();

  if (req.method !== 'POST') {
    return res.status(400).json({
      success: false,
      message: 'Only POST Method is allowed',
    });
  }
  const { title, description } = req.body;

  await Task.create({
    title,
    description,
    // isCompleted: false,
    user: 'SomeOneghjdsk',
  });

  res.json({
    success: true,
    message: 'Task Created',
  });
};

export default handler;
