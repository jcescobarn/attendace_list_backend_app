import { Controller, Body, Post } from "@nestjs/common";
import TeacherService from "src/services/teacher.service";
import Teacher from "src/entities/teacher.entity";

@Controller('teacher')
export default class TeacherController{

    constructor(
        private teacherService:TeacherService
    ){}

    @Post('getAll')
    public async getTeachers(@Body() body):Promise<any>{
        try{
            const teachers:Teacher[] = await this.teacherService.findAll();
            return {
                status_code: 200,
                error_code: false,
                message: "Se ha consultado con éxito la lista de profesores",
                content: teachers
            }
        }catch(exc){
            return {
                status_code: 500,
                error_code: true,
                message: "Error al consultar la lista de profesores",
                content: {} 
            }
        }
    }
}