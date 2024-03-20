import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsEntity } from './comments.entity';

@Module({
  providers: [CommentsService, CommentsEntity]
})
export class CommentsModule { }
