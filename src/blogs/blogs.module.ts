import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsEntity } from './blogs.entity';
import { BlogsController } from './blogs.controller';
@Module({
  imports: [TypeOrmModule.forFeature([BlogsEntity])],
  controllers: [BlogsController],
  providers: [BlogsService]
})
export class BlogsModule { }
