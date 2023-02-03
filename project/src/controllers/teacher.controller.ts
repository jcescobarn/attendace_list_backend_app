import { Controller, Body, Post } from "@nestjs/common";
import TeacherService from "src/services/teacher.service";
import Teacher from "src/entities/teacher.entity";
import {TeacherRequestInterface,TeacherResponseInterface} from '../interfaces/teachers.interface'
import { doc } from "prettier";

@Controller('teacher')
export default class TeacherController{

    constructor(
        private teacherService:TeacherService
    ){}

    @Post('getAll')
    public async getTeachers():Promise<TeacherResponseInterface>{
        try{
            const teachers:Teacher[] = await this.teacherService.findAll();
            return {
                status_code: 200,
                error_code: false,
                message: "Se ha consultado con éxito la lista de profesores",
                content: teachers
            };
        }catch(excep){
            return {
                status_code: 500,
                error_code: true,
                message: "Error al consultar la lista de profesores",
                content: excep 
            };
        }
    }

    @Post('getOne')
    public async getTeacher(@Body() body: TeacherRequestInterface):Promise<TeacherResponseInterface>{
        try{
            const document_type = body.payload.document_type;
            const document_number = body.payload.document_number;
            const teacher = await this.teacherService.findOne(document_type,document_number);
            return {
                status_code: 200,
                error_code: false,
                message: "Se ha consultado con éxito el profesor asociado a los datos suministrados",
                content: teacher
            }
        }catch(excep){
             return {
                status_code: 500,
                error_code: true,
                message: "Error al consultar la lista de profesores",
                content: excep 
            }           
        }
    }

    @Post('delete')
    public async deleteTeacher(@Body() body: TeacherRequestInterface):Promise<TeacherResponseInterface>{
        try{
            const document_type = body.payload.document_type;
            const document_number = body.payload.document_number;  
            const teacher = this.teacherService.delete(document_type,document_number);
            return {
                status_code: 200,
                error_code: false,
                message: "Se ha eliminado el profesor asociado a los datos suministrados",
                content: teacher
            }
        }catch(excep){
             return {
                status_code: 500,
                error_code: true,
                message: "Error eliminar al profesor",
                content: excep 
            }           
        }
    }

    @Post('create')
    public async createTeacher(@Body() body: TeacherRequestInterface):Promise<TeacherResponseInterface>{
        try{
            const document_type = body.payload.document_type;
            const document_number = body.payload.document_number;  
            const name = body.payload.name;
            const bachelor  = body.payload.bachelor;
            const teacher = this.teacherService.create(document_type,document_number,name,bachelor);
            return {
                status_code: 200,
                error_code: false,
                message: "Se ha creado el profesor con éxito",
                content: teacher
            }
        }catch(excep){
             return {
                status_code: 500,
                error_code: true,
                message: "Error al crear el profesor",
                content: excep 
            }           
        }
    }
}
