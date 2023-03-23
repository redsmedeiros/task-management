/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { Task } from "./task.entity";

/* eslint-disable prettier/prettier */
@EntityRepository(Task)
export class taskRepository extends Repository<Task>{
    
}