import { Module } from '@nestjs/common';
import { ExpressionsService } from './expressions.service';
import { ExpressionsEntity } from './expressions.entity';

@Module({
  providers: [ExpressionsService, ExpressionsEntity]
})
export class BlogsModule { }
