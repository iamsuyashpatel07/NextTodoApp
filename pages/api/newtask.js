import { Task } from '../../models/task';
import { connectDB } from '../../utils/features';

const handler = async (req, res) => {
  await connectDB();

  await Task.create({
    title: 'Sample Title 1',
    description: 'Sample Description for title 1.',
    // isCompleted: false,
    user: 'SomeOneghjdsk',
  });

  res.json({
    success: true,
  });
};

export default handler;
