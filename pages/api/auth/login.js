import { User } from '../../../models/user';
import { connectDB } from '../../../utils/features';
import { serialize } from 'cookie';

const { asyncError, errorHandler } = require('../../../middlewares/error');

const handler = asyncError(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return errorHandler(res, 400, 'Please enter all fields');
  }

  await connectDB();

  const user = await User.findOne({ email });
});

export default handler;
