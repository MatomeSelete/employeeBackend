const {Router} = require('express');
const controller = require('./controller');
const { getStudents } = require('./queries');


const router = Router();

// router.get("/", (req, res ) => {
//     res.send("using api route");
// });

router.get("/", controller.getStudents);
router.get("/:id", controller.getStudentsById);

router.post("./", controller.addStudent);


module.exports = router;

