import { Schema, model } from "mongoose";

const potenciometroSchema = new Schema({
    valor: {
        type: Number,
        required: true
    },
}, {
    versionKey: false,
    timestamps: true
});

export default model('Potenciometro', potenciometroSchema);
