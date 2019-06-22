import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column('varchar',{ unique:true })
    name: string;

    @Column('longtext',{nullable:true})
    password: string;

    @CreateDateColumn()
    created: Date;
    
    @UpdateDateColumn()
    updated: Date;

}