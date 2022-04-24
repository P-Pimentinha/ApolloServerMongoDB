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
  }
};

exports.resolvers = resolvers;