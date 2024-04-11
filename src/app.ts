import express, { Express, Request, Response } from 'express';
import authRouter from "./routes/authRouter";

const app: Express = express();
const port = 5000;

//app.use(express.json)
app.use(authRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
}); 