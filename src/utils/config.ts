import dotenv from "dotenv"
dotenv.config({ path: __dirname + `/../../.env.${process.env.NODE_ENV}` })

const config = {
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
}

export default config