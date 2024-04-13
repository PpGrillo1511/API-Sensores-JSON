import { Router } from "express";
import { 
    getAllPIRSensors,
    insertOnePIRSensor,
} from "../controllers/sensors.controller.js";

import { 
    getAllTemperatureHumiditySensors,
    insertOneTemperatureHumiditySensor,
} from "../controllers/sensors.controller.js";

const router = Router();

// Rutas para los sensores PIR
router.get('/pir', getAllPIRSensors);
router.post('/pir', insertOnePIRSensor);

// Rutas para los sensores de temperatura y humedad
router.get('/dht11', getAllTemperatureHumiditySensors);
router.post('/dht11', insertOneTemperatureHumiditySensor);

export default router;
