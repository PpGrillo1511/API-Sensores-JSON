import { Schema, model } from "mongoose";

const pirSensorSchema = new Schema({
    motionDetected: {
        type: Boolean,
        required: true
    },
}, {
    versionKey: false,
    timestamps: true
});

export default model('PIRSensor', pirSensorSchema);
