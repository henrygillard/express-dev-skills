var express = require('express');
var router = express.Router();
var skillsCtrl = require("../controllers/skills")

/* GET users listing. */
router.get('/', skillsCtrl.index); 
router.get("/:id", skillsCtrl.show);

// GET /skills/new
router.get("/new", skillsCtrl.new);

// POST /skills
router.post("/", skillsCtrl.create);


module.exports = router;
