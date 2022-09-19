import "dotenv/config";
import config from "../utils/config";
import * as contentful from "contentful";

export const client = contentful.createClient({
  space: config.space || "",
  accessToken: config.accessToken || "",
});