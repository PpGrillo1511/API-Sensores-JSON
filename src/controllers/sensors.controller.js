import SensorDAO from "../dao/sensors.dao.js";

const sensorController = {};

// Controlador para sensores de agua
export const getAllaguaSensors = (req, res) => {
    SensorDAO.getAllaguaSensors()
        .then(sensors => {
            res.json(sensors);
        })
        .catch(err => res.json({
            status: "Servidor no disponible"
        }));
}

export const insertOneaguaSensor = (req, res) => {
    SensorDAO.insertOneaguaSensor(req.body)
        .then(result => res.json({
            status: "Sensor de agua insertado"
        }))
        .catch(err => res.status(500).json({
            status: "Servidor no disponible"
        }));
}

// Controlador para sensores de potenciómetro
export const getAllpotenciometroSensors = (req, res) => {
    SensorDAO.getAllpotenciometroSensors()
        .then(sensors => {
            res.json(sensors);
        })
        .catch(err => res.json({
            status: "Servidor no disponible"
        }));
}

export const insertOnepotenciometroSensor = (req, res) => {
    SensorDAO.insertOnepotenciometroSensor(req.body)
        .then(result => res.json({
            status: "Sensor de potenciómetro insertado"
        }))
        .catch(err => res.status(500).json({
            status: "Servidor no disponible"
        }));
}

// Controlador para sensores ultrasónicos
export const getAllultrasonicoSensors = (req, res) => {
    SensorDAO.getAllultrasonicoSensors()
        .then(sensors => {
            res.json(sensors);
        })
        .catch(err => res.json({
            status: "Servidor no disponible"
        }));
}

export const insertOneultrasonicoSensor = (req, res) => {
    SensorDAO.insertOneultrasonicoSensor(req.body)
        .then(result => res.json({
            status: "Sensor ultrasónico insertado"
        }))
        .catch(err => res.status(500).json({
            status: "Servidor no disponible"
        }));
}

export default sensorController;
