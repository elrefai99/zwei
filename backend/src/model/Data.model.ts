import { Schema, model, Document } from "mongoose";
import Data from "../interfaces/Data.interface";

const DataSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    Price: {
        type: String,
        required: true,
    },
    Catagory: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const dataModel = model<Data & Document>('Data', DataSchema)

export default dataModel;