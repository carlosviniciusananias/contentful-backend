require('dotenv').config({path:__dirname+'/./../../.env'})

const config = {
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
};

module.exports = config;
