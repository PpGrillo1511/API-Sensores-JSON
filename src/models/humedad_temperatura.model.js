import { Schema, model } from "mongoose";

// Define el esquema del sensor de temperatura y humedad
const humedad_temperaturaSchema = new Schema({
    temperature: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
}, {
    versionKey: false,
    timestamps: true
});

export default model('TemperatureHumiditySensor', humedad_temperaturaSchema);
