import mongoose from "mongoose";
import Story from "../models/storycontent.js";

const getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createStory = async (req, res) => {
  const body = req.body;

  const newStory = new Story({ ...body });

  try {
    await newStory.save();
    res.status(201).json(newStory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateStory = async (req, res) => {
  const { id: _id } = req.params;
  const story = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("This ID doesn't belong to any STORY");
  }

  try {
    const updatedStory = await Story.findByIdAndUpdate(_id, story, { new: true });
    res.json(updatedStory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteStory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("This ID doesn't belong to any story");
  }


    await Story.findByIdAndRemove(id);
    res.json({ message: "Story deleted successfully" });
  }

  const likeStory = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("This ID doesn't belong to any story");
    }

     const story = await Story.findOne({_id: id});
      const updatedStory = await Story.findByIdAndUpdate(id,{likes: story.likes +1},{new: true});
      res.json(updatedStory);
    }
  


export { getStories, createStory, updateStory, deleteStory ,likeStory };
