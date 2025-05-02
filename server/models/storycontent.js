import mongoose from "mongoose";

const storySchema = mongoose.Schema({
    caption: {type:String, required: true},
    username: {type:String, required: true},
    userID: {type:String, required: false},
    image: {type:String, required: false},
    tags: String ,
    likes: {type:Number, default:0},
    posteDate:{type: Date, default:new Date() },

});
export default mongoose.model("story",storySchema);