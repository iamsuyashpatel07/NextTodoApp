import mongoose from 'mongoose';

const schema = new mongoose.schema({
  name: {
    name: String,
    required: true,
  },
  email: {
    name: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    minLength: [6, 'Password too short'],
  },
});

mongoose.models = {};

export const User = mongoose.model('User', schema);
