const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email address is required"],
        unique: [true, "Account already exists with this email address"],
        set: v => v.toLowerCase()
    },
    password: {
        type: String,
        set: v => bcrypt.hashSync(v, 10),
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        }
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Friend"
        }
    ],
    avatar: {
        type: String,
        default: null,
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;