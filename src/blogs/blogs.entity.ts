import { UserEntity } from './../users/users.entity';
import { CommentsEntity } from './../comments/comments.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn, OneToMany, Entity } from 'typeorm';

@Entity({ name: 'blogs' })
export class BlogsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  image: string;

  @Column({ type: 'varchar', length: 200 })
  title: string;

  @Column({ type: 'varchar', length: 5000 })
  description: string;

  @Column({ default: false })
  isDeleted: boolean;

  @ManyToOne(() => UserEntity, user => user.blogs)
  user: UserEntity;

  @OneToMany(() => CommentsEntity, comment => comment.user)
  comments: CommentsEntity[];
}