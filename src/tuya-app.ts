/**
 * Required External Modules
 */
require('dotenv').config();
import express from "express";
import { tuyaController } from "./controller/tuya.controller";

/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT);

const app = express();

/**
 *  App Configuration
 */
app.use("/tuya/", tuyaController);

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});