"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv = require("dotenv");
const teacher_entity_1 = require("../entities/teacher.entity");
dotenv.config();
const db_host = process.env.DB_HOST;
const db_port = parseInt(process.env.DB_PORT);
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db = process.env.DB;
const databaseProviders = [
    {
        provide: 'CONNECTION',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'mysql',
                host: db_host,
                port: db_port,
                username: db_user,
                password: db_password,
                database: db
            });
            sequelize.addModels([teacher_entity_1.default]);
            await sequelize.sync();
            return sequelize;
        }
    }
];
exports.default = databaseProviders;
//# sourceMappingURL=database.provider.js.map