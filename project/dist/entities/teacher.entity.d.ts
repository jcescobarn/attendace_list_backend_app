import { Model } from 'sequelize-typescript';
declare class Teacher extends Model {
    document_type: string;
    document_number: string;
    name: string;
    bachelor: string;
}
export default Teacher;
