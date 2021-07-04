/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as TuyaService from "../service/tuya.service";

/**
 * Router Definition
 */

export const tuyaController = express.Router();

//GET switchdevices
tuyaController.get("/switchdevices", async (req: Request, res: Response) => {
    try {

        let devices = process.env.DEVICE_IDS.trim().split(",");

        let status = await TuyaService.switchStatus(devices);

        res.status(200).send(
            {
                "success": true,
                "message": "OK",
                "status": !status
            }
        );
    } catch (e) {
        res.status(500).send(
            {
                "success": false,
                "message": e.message,
                "status": "unknown"
            }
        );
    }
});