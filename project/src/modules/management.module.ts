import { Module } from "@nestjs/common";
import TeacherController from "src/controllers/teacher.controller";
import TeacherService from "src/services/teacher.service";
import DatabaseModule from "./database.module";
import managementProvider from "src/providers/management.provider";

@Module({
    imports: [DatabaseModule],
    controllers:[TeacherController],
    providers: [TeacherService, ...managementProvider]
})
export default class ManagementModule{};