import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
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
    deleteTask(@Param('id') id: string): void{
        return this.tasksService.deleteTask(id);
    }

    @Patch('/:id')
    updateTaskStatus(@Param('id') id: string, @Body() updateStatusTaskDto: UpdateTaskStatusDto): Task{
        return this.tasksService.updateTask(id, updateStatusTaskDto );
    }
}
