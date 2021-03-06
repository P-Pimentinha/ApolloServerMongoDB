const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
  });

  const User = mongoose.model('User', userSchema);
  
  async function getAllUsers() {
    return await User.find();
  }

  async function addNewUser(name, email) {
    const user = new User ({name, email});
    await user.save();
    return user;
  }

  async function deleteUser(id) {
    const user = await User.findByIdAndRemove(id);
    
    if (!user) return ('The customer with the given ID was not found.');

    return user;
  }

  module.exports = {
    User,
    getAllUsers,
    addNewUser,
    deleteUser
  };