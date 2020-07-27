const router = require("express").Router();
//const profileRoutes = require("./profile");
//const roomRoutes = require("./room");
const staffRoutes = require("./staff");
const studentRoutes = require("./student");
const userRoutes = require("./user");
// all routes
//router.use("/profile", profileRoutes);
//router.use("/room", roomRoutes);
router.use("/staffs", staffRoutes);
router.use("/students", studentRoutes);
router.use("/users", userRoutes);

module.exports = router;
