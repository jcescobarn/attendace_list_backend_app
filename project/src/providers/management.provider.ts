import Teacher from "src/entities/teacher.entity";

const managementProvider = [
    {
        provide: 'TEACHER_REPOSITORY',
        useValue: Teacher
    }
];

export default managementProvider