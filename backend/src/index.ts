import 'dotenv/config'
import App from './App';
import DataController from './Data/Data.controller';

const app = new App([
    new DataController(),
]);

app.listen()