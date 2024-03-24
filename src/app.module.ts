import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from 'src/data-source';
import configuration from 'src/config/configuration';
import { BlogsModule } from 'src/blogs/blogs.module';
import { RolesModule } from 'src/roles/roles.module';
import { CommentsModule } from 'src/comments/comments.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      ...dataSourceOptions,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    UsersModule,
    BlogsModule,
    RolesModule,
    CommentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
