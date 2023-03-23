import { taskRepository } from './task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([taskRepository])
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
