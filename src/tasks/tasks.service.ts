import { CreateTaskDto } from './dto/create-task.dto';
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

    getTaskById(id: string): Task{

        return this.tasks.find((task)=> task.id === id);

    }

    createTask(createTaskDto: CreateTaskDto): Task{

        const { title, description } = createTaskDto;

        const task: Task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.tasks.push(task);

        return task;
    }

    deleteTask(id: string): string{
        
        this.tasks = this.tasks.filter((task)=> task.id !== id);

        return "Deletado com sucesso"
    }

    
}
