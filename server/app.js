import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import storyRoutes from './routes/stories.js';


const App = express();

App.use(bodyParser.json({ limit: "32mb", extended: true }));
App.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
App.use(cors());
App.use("/stories", storyRoutes);
const MONGO_URI = "mongodb+srv://FP:Hqn0esmLTZUPp2xs@cluster0.yfxlwpt.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5001;

const connectBD = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    App.listen(PORT, () => console.log('serveur running on port: ${PORT}'));
  }
  catch (err) {
    console, Error("connection to mongoDB failed", err.message);
  }
}
connectBD();
mongoose.connection.on("open", () => console.log('connection succesfully'));
mongoose.connection.on("error", (err) => console.log(err));




