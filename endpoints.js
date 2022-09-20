module.exports = function (app) {
  app.get("/api/", (req, res) => {
    return res.status(404).send(false);
  });

  app.get("/api/products", (req, res) => {
    return res.status(404).send(false);
  });
};
