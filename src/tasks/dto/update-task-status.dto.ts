/* eslint-disable prettier/prettier */
import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';
/* eslint-disable prettier/prettier */
export class UpdateTaskStatusDto{

    @IsEnum(TaskStatus)
    status: TaskStatus
}