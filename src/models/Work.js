import mongoose from "mongoose";

const workSchema = new mongoose.Schema(
    {
        id: { type: String },
        day: { type: String, required: true },
        start: { type: String, required: true },
        end: { type: String, required: true },
    },
    {
        versionKey: false,
    }
);

const work = mongoose.model("work", workSchema);

export default work;