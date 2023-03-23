/* eslint-disable prettier/prettier */
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-status.enum';
/* eslint-disable prettier/prettier */
export class GetTasksFilterDto{
    @IsOptional()
    @IsEnum(TaskStatus)
    status: TaskStatus;

    @IsOptional()
    @IsString()
    search: string;
}