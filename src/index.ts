/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";

dotenv.config(); // connected to .env


/**
 * App Variables
 */
if (!process.env.PORT) process.exit(1);

const PORT: number = parseInt(process.env.PORT as string, 10);

const app : any = express();


/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/menu/items", itemsRouter);


/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});