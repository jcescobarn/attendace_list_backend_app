import {Table, Column, Model, DataType, PrimaryKey} from 'sequelize-typescript';


@Table
class Teacher extends Model{

    @PrimaryKey
    @Column(DataType.STRING)
    public document_type: string

    @PrimaryKey
    @Column(DataType.STRING)
    public document_number: string

    @Column(DataType.STRING)
    public name: string

    @Column(DataType.STRING)
    public bachelor: string
}

export default Teacher;