import { Schema, model, Document } from "mongoose";
import Data from "../interfaces/Data.interface";

const DataSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    catagory: {
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