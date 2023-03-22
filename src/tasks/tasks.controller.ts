import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){}

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[]{

        if(Object.keys(filterDto).length){
            return this.tasksService.getTasksWithFilters(filterDto);
        }else{
            return this.tasksService.getAlltasks();
        }
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

    @Put('/:id')
    updateTask(@Body() createTaskDto: CreateTaskDto, @Param('id') id: string): Task{
        return this.tasksService.updateTask(createTaskDto, id);
    }
}
