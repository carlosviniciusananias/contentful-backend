import { client } from "./client";

const getProducts = () => {
  const data = client
    .getEntries()
    .then((res) => {
      return res;
    })
    .catch(console.error);

  return data;
};

export default getProducts;
