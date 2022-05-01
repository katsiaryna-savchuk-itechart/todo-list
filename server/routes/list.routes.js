const list = require("../controllers/list.controller.js");
const router = require("express").Router();

router.post("/", list.create);
router.get("/", list.findAll);
router.delete("/:id", list.delete);
router.delete("/", list.deleteAll);

module.exports = router;
