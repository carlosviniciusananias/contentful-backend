require('dotenv').config({path:__dirname+'/./../../.env'})

const config = {
  space: process.env.NODE_SPACE,
  accessToken: process.env.NODE_ACCESSTOKEN,
};

module.exports = config;
