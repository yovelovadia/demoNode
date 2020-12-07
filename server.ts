import express, { Application } from "express";
import * as dotenv from "dotenv";
import routes from "./Routes";
dotenv.config();

const app: Application = express();

const PORT: string | number = process.env.PORT || 5000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
