const router = require("express").Router();
const staffsController = require("../../controllers/staffsController");

// // Matches with "/api/books"
 router.route("/")
   .get(staffsController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
