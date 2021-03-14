var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    default:
      "https://res.cloudinary.com/codersx-ncq/image/upload/v1603970847/kisspng-computer-icons-user-profile-portable-network-graph-circle-svg-png-icon-free-download-5-4714-onli-5c2a3809d6e8e6.1821006915462707298803_dfp9or.jpg",
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  tags: [],
  comment: [
    {
      username: {
        type: String,
      },
      text: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  creatAt: {
    type: Date,
    default: Date.now,
  },
});
var Posts = mongoose.model("Posts", postSchema, "posts");
module.exports = Posts;
