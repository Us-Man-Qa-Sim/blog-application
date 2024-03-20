import { Injectable } from '@nestjs/common';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@Injectable()
export class BlogsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  isDeleted: boolean;

  // relation with user

}