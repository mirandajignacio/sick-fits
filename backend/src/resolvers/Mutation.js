const mutations = {
  async createItem(parent, args, context, info) {
    //TODO: Check if they are logged in

    const item = await context.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    return item;
  },

  async updateItem(parent, args, context, info) {
    // first take a copy of the update
    const update = { ...args };
    // remove the if from the update
    delete update.id;
    // run the update method
    return context.db.mutation.updateItem(
      {
        data: update,
        where: {
          id: args.id
        }
      },
      info
    );
  }
  // createDog(parent, args, context, info) {
  //   global.dogs = global.dogs || [];
  //   //create a dog!
  //   const newDog = { name: args.name };
  //   global.dogs.push(newDog);
  //   return newDog;
  // }
};

module.exports = mutations;
