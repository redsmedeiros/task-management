import { CreateTaskDto } from './dto/create-task.dto';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){}

    @Get()
    getAllTasks(): Task[]{
        return this.tasksService.getAlltasks();
    }

    @Post()
    createTask(@Body() createtaskDto: CreateTaskDto): Task{
        return this.tasksService.createTask(createtaskDto);
    }

    @Get('/:id')
    getTaskByid(@Param('id') id: string): Task{
        return this.tasksService.getTaskById(id);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): string{
        return this.tasksService.deleteTask(id);
    }
}
