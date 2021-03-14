

//using mongoose
const Posts = require("../model/Post.model.js");

//using bcrypt
module.exports = {
  getPosts: async function (req, res, next) {
    try {
      const posts = await Posts.find().sort({ date: -1 });
      return res.json({
        success: {
          msg: "Get posts success",
          posts,
        },
      });
    } catch (err) {
      next(err);
    }
  },
  getSinglePosts: async function (req, res, next) {
    try {
      const post = await Posts.findById(req.params.id);
      return res.json({
        success: {
          msg: "Get posts success",
          post,
        },
      });
    } catch (err) {
      next(err);
    }
  }
};
