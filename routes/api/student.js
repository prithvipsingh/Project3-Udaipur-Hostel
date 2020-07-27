const router = require("express").Router();
const studentsController = require("../../controllers/studentsController");

// // Matches with "/api/books"
 router.route("/")
   .get(studentsController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
