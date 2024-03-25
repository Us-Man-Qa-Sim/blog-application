import { UserEntity } from './../users/users.entity';
import { BlogsEntity } from './../blogs/blogs.entity';
import { Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, Entity } from 'typeorm';

@Entity({ name: 'comments' })
export class CommentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 1000 })
  description: string;

  @Column({ default: false })
  isDeleted: boolean;

  @ManyToOne(() => UserEntity, user => user.comments)
  user: UserEntity;

  @ManyToOne(() => BlogsEntity, blog => blog.comments)
  blog: BlogsEntity;

  @ManyToOne(() => CommentsEntity, comment => comment.replies, { nullable: true })
  parentComment: CommentsEntity;

  @OneToMany(() => CommentsEntity, comment => comment.parentComment)
  replies: CommentsEntity[];
}
