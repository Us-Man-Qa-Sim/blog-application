import { PasswordTransformer } from './password.transformer';
import { BlogsEntity } from 'src/blogs/blogs.entity';
import { CommentsEntity, RoleEntity } from 'src/entities';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  firstName: string;

  @Column({ type: 'varchar', length: 200 })
  lastName: string;

  @Column({ type: 'varchar', length: 200 })
  userName: string;

  @Column({ type: 'varchar', length: 200 })
  email: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({
    type: 'varchar',
    length: 300,
    transformer: new PasswordTransformer(),
    select: false,
    nullable: true,
  })
  password: string;

  @Column({ nullable: true, type: 'varchar', length: 100, select: false })
  salt: string;

  @Column()
  avatar: string;

  @Column()
  isDeleted: boolean;

  @Column({ default: false })
  isActive: boolean;

  @ManyToMany(() => RoleEntity, role => role.users)
  @JoinTable()
  roles: RoleEntity[];

  @OneToMany(() => BlogsEntity, blog => blog.user)
  blogs: BlogsEntity[];

  @OneToMany(() => CommentsEntity, comment => comment.user)
  comments: CommentsEntity[];
}