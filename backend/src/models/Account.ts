import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("account")
export default class Account {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    login: string;

    @Column()
    password: number;
}