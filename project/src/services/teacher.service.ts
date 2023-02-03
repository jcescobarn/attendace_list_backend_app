import { Injectable, Inject } from "@nestjs/common";
import Teacher from "src/entities/teacher.entity";

@Injectable()
export default class TeacherService {
    constructor(
        @Inject('TEACHER_REPOSITORY')
        private teacherRepository: typeof Teacher
    ){}

        
    public async findAll():Promise<Teacher[]>{
        return await this.teacherRepository.findAll<Teacher>({
            attributes: ["document_type","document_number","name","bachelor"]
        });
    }

    public async findOne(document_type:string, document_number:string):Promise<Teacher>{
        return await this.teacherRepository.findOne({
            attributes: ["document_type","document_number","name","bachelor"],
            where:{
                document_type,
                document_number
            }
        });
    }

    public async delete(document_type:string, document_number:string):Promise<any>{
        return await this.teacherRepository.destroy({
            where:{
                document_type,
                document_number               
            }
        });
    }

    public async create(document_type:string,document_number:string,name:string,bachelor:string){
        return await this.teacherRepository.create({
            document_type,
            document_number,
            name,
            bachelor
        });
    }

}
