import { Schema, model } from "mongoose";

const ultrasonicoSchema = new Schema({
    distancia: {
        type: Number,
        required: true
    },
}, {
    versionKey: false,
    timestamps: true
});

export default model('Ultrasonico', ultrasonicoSchema);
