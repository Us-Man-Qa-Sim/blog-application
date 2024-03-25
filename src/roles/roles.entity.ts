import { UserEntity } from './../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity({ name: 'roles' })
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  title: string;

  @Column({ default: false })
  isActive: boolean;

  @ManyToMany(() => UserEntity, user => user.roles)
  users: UserEntity[];
}