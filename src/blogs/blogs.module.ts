import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsEntity } from './blogs.entity';

@Module({
  providers: [BlogsService, BlogsEntity]
})
export class BlogsModule { }
