const Query = {
  dogs(parent, args, context, info) {
    return [{ name: "Snickers" }, { name: "Summie" }];
  }
};

module.exports = Query;
