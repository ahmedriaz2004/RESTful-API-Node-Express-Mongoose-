const express = require('express');
const { deleteUserById, getUsers, getUserById } = require('../db/users');

const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
const updateUser = async(req,res)=>{
  try {
    const {id} = req.params;
    const {username} = req.body;

    if(!username) {
      return res.status(400)
    }
    const user = await getUserById(id);
    user.username = username;
    await user.save();

return res.status(200).json(user)

  } catch (error) {
    console.log(error);
    return res.status(400)
  }
}

module.exports = {
  getAllUsers,
  deleteUser,
  updateUser,
};