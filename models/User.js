import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
},
  password: {
    type: String,
    required: true,
    minLength: 6,
},
  posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
},
{
    timestamps:true
},
);

export default model("User", userSchema);