import SensorDAO from "../dao/sensors.dao.js";

const sensorController = {};

// Controlador para sensores PIR
export const getAllPIRSensors = (req, res) => {
    SensorDAO.getAllPIRSensors()
        .then(sensors => {
            res.json(sensors);
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const insertOnePIRSensor = (req, res) => {
    SensorDAO.insertOnePIRSensor(req.body)
        .then(result => res.json({
            status: "PIR sensor inserted"
        }))
        .catch(err => res.status(500).json({
            status: "Server unavailable"
        }));
}

// Controlador para sensores de temperatura y humedad
export const getAllTemperatureHumiditySensors = (req, res) => {
    SensorDAO.getAllTemperatureHumiditySensors()
        .then(sensors => {
            res.json(sensors);
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const insertOneTemperatureHumiditySensor = (req, res) => {
    SensorDAO.insertOneTemperatureHumiditySensor(req.body)
        .then(result => res.json({
            status: "Temperature and humidity sensor inserted"
        }))
        .catch(err => res.status(500).json({
            status: "Server unavailable"
        }));
}

