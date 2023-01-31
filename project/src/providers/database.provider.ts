import { Sequelize } from "sequelize-typescript";
import * as dotenv from 'dotenv'
import Teacher from "src/entities/teacher.entity";


dotenv.config();

// process.env.${Nombre de variable}
const db_host:string = process.env.DB_HOST;
const db_port:number = parseInt(process.env.DB_PORT);
const db_user:string = process.env.DB_USER;
const db_password:string = process.env.DB_PASSWORD;
const db:string = process.env.DB;

const databaseProviders = [
    {
        provide: 'CONNECTION',
        useFactory: async() => {
            const sequelize:Sequelize = new Sequelize({
                dialect: 'mysql',
                host: db_host,
                port: db_port,
                username: db_user,
                password: db_password,
                database: db
            });
            sequelize.addModels([Teacher]);
            await sequelize.sync();

            return sequelize;
        }
    }
]

export default databaseProviders;

