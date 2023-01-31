import { Sequelize } from "sequelize-typescript";
declare const databaseProviders: {
    provide: string;
    useFactory: () => Promise<Sequelize>;
}[];
export default databaseProviders;
