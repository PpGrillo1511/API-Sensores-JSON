import { Router } from "express";
import { 
    getAllaguaSensors,
    insertOneaguaSensor,
} from "../controllers/sensors.controller.js";

import { 
    getAllpotenciometroSensors,
    insertOnepotenciometroSensor,
} from "../controllers/sensors.controller.js";

import { 
    getAllultrasonicoSensors,
    insertOneultrasonicoSensor,
} from "../controllers/sensors.controller.js";

const router = Router();

// Rutas para los sensores de agua
router.get('/agua', getAllaguaSensors);
router.post('/agua', insertOneaguaSensor);

// Rutas para los sensores de potenciómetro
router.get('/potenciometro', getAllpotenciometroSensors);
router.post('/potenciometro', insertOnepotenciometroSensor);

// Rutas para los sensores ultrasónicos
router.get('/ultrasonico', getAllultrasonicoSensors);
router.post('/ultrasonico', insertOneultrasonicoSensor);

export default router;
