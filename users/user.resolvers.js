const userModel = require('./user.model');

 const resolvers = {
  Query: {
    /* getAllUsers: async() => {
      return await User.find();
    }, */
    allUsers: () => {
      return userModel.getAllUsers();
    }
  },
  Mutation: {
    addNewUser: async (_, args) => {
      const {name, email} = args.user;
      const user = new userModel.User ({name, email});
      await user.save();
      return user;
    },
  }
};

exports.resolvers = resolvers;