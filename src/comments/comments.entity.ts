import { Injectable } from '@nestjs/common';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@Injectable()
export class CommentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ default: false })
  isDeleted: boolean;

  // relation with user
  // user 

  // relation with blog
  // blog

  // relation with comment self join
  // 
}
