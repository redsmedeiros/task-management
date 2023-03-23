/* eslint-disable prettier/prettier */
import { IsEnum } from 'class-validator';
import { TaskStatus } from './../task.model';
/* eslint-disable prettier/prettier */
export class UpdateTaskStatusDto{

    @IsEnum(TaskStatus)
    status: TaskStatus
}