const mongoose = require('mongoose');

// User Config
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

const UserModel = mongoose.model('User', UserSchema);

// User Actions
const getUsers = () => UserModel.find();
const getUserByEmail = (email) => UserModel.findOne({ email });
const getUserBySessionToken = (sessionToken) => UserModel.findOne({ 'authentication.sessionToken': sessionToken });
const getUserById = (id) => UserModel.findById(id);
const createUser = (values) => new UserModel(values).save().then((user) => user.toObject());
const deleteUserById = (id) => UserModel.findOneAndDelete({ _id: id });
const updateUserById = (id, values) => UserModel.findByIdAndUpdate(id, values);

module.exports = {
  UserModel,
  getUsers,
  getUserByEmail,
  getUserBySessionToken,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
};