import { Injectable } from '@nestjs/common';
import { Column, PrimaryGeneratedColumn } from 'typeorm';


@Injectable()
export class ExpressionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  icon: string;

  @Column({ default: false })
  isActive: boolean;

  // relation with user
  // user 

  // relation with blog
  // blog

  // relation with comment self join
  // 

}
