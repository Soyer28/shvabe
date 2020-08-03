module.exports = app => {
  const users = require("../controllers/users.controller.js");

  let router = require("express").Router();
  let auth = require("express").Router();

  // Create a new User
  router.post("/", users.create);

  // Retrieve all users
  router.get("/", users.findAll);

  // Retrieve a single User with id
  router.get("/:id", users.findOne);

  // Update a User with id
  router.put("/:id", users.update);

  // Delete a User with id
  router.delete("/:id", users.delete);

  // Create a new User
  router.delete("/", users.deleteAll);

  auth.get("/login", users.login);

  app.use("/api/users", router);
  app.use("/api/auth", auth);
};
