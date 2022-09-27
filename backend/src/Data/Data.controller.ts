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
    }

    private savedata = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const {productName, price, catagory, desc} = req.body; 

            res.status(200).json({productName, price, catagory, desc})
            next()
        }catch(err){
            res.status(403).json(err)
        }
    }
}

export default DataController