const router = require("express").Router();
const profileRoutes = require("./profile");
const roomRoutes = require("./room");
const staffRoutes = require("./staff");
const studentRoutes = require("./student");
const usersRoutes = require("./users");
// all routes
router.use("/profile", profileRoutes);
router.use("/room", roomRoutes);
router.use("/staff", staffRoutes);
router.use("/student", studentRoutes);
router.use("/users", usersRoutes);
module.exports = router;
