import { serialize } from 'cookie';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: 'NextTodo',
  });
};

export const cookieSetter = (res, token, set) => {
  res.setHeader(
    'set-cookie',
    serialize('token', set ? token : '', {
      paath: '/',
      httpOnly: true,
      maxAge: set ? 15 * 24 * 60 * 60 * 1000 : 0,
    })
  );
};

export const generateToken = _id => {
  return jwt.sign({ _id }, process.env.JWT_SECRET);
};
