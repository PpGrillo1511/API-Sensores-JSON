import aguaSensor from "../models/aguaSensor.model.js";
import potenciometroSensor from "../models/potenciometro.model.js";
import ultrasonicoSensor from "../models/ultrasonico.model.js";
const SensorDAO = {};

// Funciones para PIRSensor
SensorDAO.getAllaguaSensors = async () => {
    const sensors = await aguaSensor.find({});
    return sensors;
};

SensorDAO.insertOneaguaSensor = async (sensor) => {
    return await aguaSensor.create(sensor);
};

// Funciones para TemperatureHumiditySensor
SensorDAO.getAllpotenciometroSensors = async () => {
    const sensors = await potenciometroSensor.find({});
    return sensors;
};

SensorDAO.insertOnepotenciometroSensor = async (sensor) => {
    return await potenciometroSensor.create(sensor);
};
SensorDAO.getAllultrasonicoSensors = async () => {
    const sensors = await ultrasonicoSensor.find({});
    return sensors;
};

SensorDAO.insertOneultrasonicoSensor = async (sensor) => {
    return await ultrasonicoSensor.create(sensor);
};

export default SensorDAO;
