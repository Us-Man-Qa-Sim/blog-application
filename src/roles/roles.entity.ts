import { UserEntity } from './../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'roles' })
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  isActive: boolean;

  @ManyToOne(() => UserEntity, user => user.roles)
  user: UserEntity;
}