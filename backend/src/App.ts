import express, {Application} from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import mongoose from 'mongoose'
import cors from 'cors';
import Controller from './interfaces/controller.interface';

class App {

    public app: Application;

    constructor(controller: Controller[]) {
        this.app = express();
        this.HandelMiddleware();
        this.handelController(controller)
    }

    public HandelMiddleware(){
        this.app.use(morgan('dev'))
        this.app.use(cors({
            origin: 'http://127.0.0.1:5173',
        }))
        this.app.use(helmet())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    public listen(){
        const port = process.env.PORT || 1999;
        mongoose.connect(`${process.env.DataBaseURL}`)
            .then( () => {
                this.app.listen(port, () => {
                    console.log('listening on Host ' + process.env.Host);
                });
            }).catch(err => console.log(err))
    }
    public getServer(){
        return this.app
    }

    private handelController(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

}

export default App;