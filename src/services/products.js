const client = require("./client");

const getProducts = () => {
  const data = client
    .getEntries()
    .then((res) => {
      return res;
    })
    .catch(console.error);

  return data;
};

module.exports = getProducts;
