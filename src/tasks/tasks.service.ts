import { Task, TaskStatus } from './task.model';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    constructor(){}

    getAlltasks(): Task[]{
        return this.tasks;
    } 

    createTask(title: string, description: string): Task{

        const task: Task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.tasks.push(task);

        return task;
    }

    
}
