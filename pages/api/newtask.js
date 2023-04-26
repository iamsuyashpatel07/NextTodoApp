import { asyncError } from '../../middlewares/error';
import { Task } from '../../models/task';
import { connectDB } from '../../utils/features';

const handler = asyncError(async (req, res) => {
  await connectDB();

  if (req.method !== 'POST') {
    return errorHandler(res, 400, 'Only POST Method is allowed');
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
});

export default handler;
