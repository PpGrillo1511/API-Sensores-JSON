import PIRSensor from "../models/pirSensor.model.js";
import TemperatureHumiditySensor from "../models/humedad_temperatura.model.js";

const SensorDAO = {};

// Funciones para PIRSensor
SensorDAO.getAllPIRSensors = async () => {
    const sensors = await PIRSensor.find({});
    return sensors;
};

SensorDAO.insertOnePIRSensor = async (sensor) => {
    return await PIRSensor.create(sensor);
};

// Funciones para TemperatureHumiditySensor
SensorDAO.getAllTemperatureHumiditySensors = async () => {
    const sensors = await TemperatureHumiditySensor.find({});
    return sensors;
};

SensorDAO.insertOneTemperatureHumiditySensor = async (sensor) => {
    return await TemperatureHumiditySensor.create(sensor);
};

export default SensorDAO;
