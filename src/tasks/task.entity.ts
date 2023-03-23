/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/* eslint-disable prettier/prettier */
@Entity()
export class Task {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string
    
}