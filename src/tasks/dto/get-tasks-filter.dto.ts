/* eslint-disable prettier/prettier */
import { TaskStatus } from './../task.model';
/* eslint-disable prettier/prettier */
export class GetTasksFilterDto{
    status?: TaskStatus;
    search?: string;
}