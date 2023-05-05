import { asyncError, errorHandler } from '../../middlewares/error';
import { Task } from '../../models/task';
import { checkAuth, connectDB } from '../../utils/features';

const handler = asyncError(async (req, res) => {
  await connectDB();

  if (req.method !== 'POST') {
    return errorHandler(res, 400, 'Only POST Method is allowed');
  }
  const { title, description } = req.body;

  if (!title || !description) {
    return errorHandler(res, 400, 'Please Enter All Field');
  }

  const user = await checkAuth(req);

  if (!user) return errorHandler(res, 401, 'Login First');

  await Task.create({
    title,
    description,
    // isCompleted: false,
    user: user._id,
  });

  res.json({
    success: true,
    message: 'Task Created',
  });
});

export default handler;
