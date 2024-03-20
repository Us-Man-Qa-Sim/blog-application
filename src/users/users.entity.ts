import { RoleEntity } from './../roles/roles.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @Column()
  isDeleted: boolean;

  @Column({ default: false })
  isActive: boolean;

  @OneToMany(() => RoleEntity, role => role.user)
  roles: RoleEntity[];
}