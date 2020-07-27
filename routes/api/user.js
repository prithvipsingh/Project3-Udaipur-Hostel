const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// // Matches with "/api/users"
 router.route("/")
   .get(usersController.findAll)
   .post(usersController.create);

// Matches with /api/users/login
   router.route("/login")
   .post(usersController.login);
// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
