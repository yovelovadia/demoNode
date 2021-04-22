import express, { Application } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import routes from "./Routes";
dotenv.config();

const app: Application = express();
const PORT: string | number = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://yovel:89318931@cluster0.yj8jc.mongodb.net/Cluster0?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Working!");
});

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// mongodb
// user auth// error handling
// tests
// http socket
// hash credentials
