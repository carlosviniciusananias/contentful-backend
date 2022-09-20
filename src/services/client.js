const contentful = require("contentful");
const config = require("../utils/config");

const client = contentful.createClient({
  space: config.space,
  accessToken: config.accessToken,
});

module.exports = client;
