import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Column()
  public email: string;

  @Column({ type: "text" })
  public passWord: string
}
