const userModel = require('./user.model');

 const resolvers = {
  Query: {
    allUsers: () => {
      return userModel.getAllUsers();
    }
  },
  Mutation: {
    addNewUser: (_, args) => {
      return userModel.addNewUser(args.name, args.email);
    },
    deleteUser: (_, args) => {
      return userModel.deleteUser(args.id);
    },
  }
};

exports.resolvers = resolvers;