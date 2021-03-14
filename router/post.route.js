var express = require("express");
var router = express.Router();

var postsController = require("../controller/post.controller");

router.get("/", postsController.getPosts);
router.get("/:id", postsController.getSinglePosts);
module.exports = router;
