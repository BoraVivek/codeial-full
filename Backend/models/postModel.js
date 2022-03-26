const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Post title is required"],
    },
    content: {
        type: String,
        required: [true, 'Post content is required'],
    },
    slug: {
        type: String,
        required: [true, 'Post slug is required'],
        unique: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Like"
        }
    ],
}, {
    timestamps: true,
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;