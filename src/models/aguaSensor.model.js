import { Schema, model } from "mongoose";

const aguaSensorSchema = new Schema({
    nivel: {
        type: Boolean,
        required: true
    },
}, {
    versionKey: false,
    timestamps: true
});

export default model('aguaSensor', aguaSensorSchema);
