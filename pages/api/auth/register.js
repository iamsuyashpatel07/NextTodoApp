import { User } from '../../../models/user';
import { connectDB, cookieSetter } from '../../../utils/features';

const { asyncError, errorHandler } = require('../../../middlewares/error');

const handler = asyncError(async (req, res) => {
  const { name, email, password } = req.body;

  if (!user || !email || !password) {
    return errorHandler(res, 400, 'Please enter all fields');
  }

  await connectDB();

  const user = await User.findOne({ email });

  if (user) {
    return errorHandler(res, 400, 'User registered with this email');
  }
  await User.create({
    name,
    email,
    password,
  });

  const token = 'Sdadsd';

  cookieSetter(res, token, true);

  res.status(201).json({
    success: true,
    message: 'Registered Successfully',
  });
});

export default handler;
