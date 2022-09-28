import { Request, Response, NextFunction, Router } from "express";
import dataModel from "../model/Data.model";
import Controller from "../interfaces/controller.interface";

class DataController implements Controller {
    private data = dataModel;
    public path = "/api/data";
    public router = Router();

    constructor(){
        this.handelRouters();
    }

    private handelRouters() {
        this.router.post(`${this.path}/savedata`, this.savedata)
        this.router.get(`${this.path}/getData`, this.getData)
    }

    private savedata = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const {productName, price, catagory, desc} = req.body; 

            const NewData = await new this.data({productName, price, catagory, desc});
            const saveData = await NewData.save();

            res.status(200).json({saveData})
            next()
        }catch(err){
            res.status(403).json(err)
        }
    }

    private getData = async (req: Request, res: Response, next: NextFunction) => {
        const data = await this.data.find()

        res.status(200).json({data})
    }
}

export default DataController