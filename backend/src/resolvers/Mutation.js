const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
  },

  async deleteItem(parent, args, context, info) {
    const where = { id: args.id };
    // find the item
    const item = await context.db.query.item({ where }, `{id title}`);
    // check if the own that item, or have the permissions
    //TODO
    // delete it!
    return context.db.mutation.deleteItem({ where }, info);
  },

  async signup(parent, args, context, info) {
    // lowerCase their email
    args.email = args.email.toLowerCase();
    // hash their password
    const password = await bcrypt.hash(args.password, 10);
    // create user in the database
    const user = await context.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ["USER"] }
        }
      },
      info
    );
    // create jwt token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // we set the jwt as a cookie on the response
    context.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
    });
    // finally we return the user to the browser
    return user;
  },

  async signin(parent, { email, password }, ctx, info) {
    // check if thereis a user whit that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email$ ${email}`);
    }
    // check if their password is correct
    const valid = bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid Password!");
    }

    // generate the jwt
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // set the cookie with the token
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
    });
    // return the user
    return user;
  },

  signout(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "GoodBye!" };
  }
};

module.exports = mutations;
