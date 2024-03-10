import { UserEntity } from './users.entity';
import { IUser, UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService
  ) { }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserEntity> {
    return await this.userService.findOne(id);
  }

  @Get()
  async find(): Promise<UserEntity[]> {
    return await this.userService.find();
  }

  @Post()
  async createOne(@Body() body: UserEntity): Promise<UserEntity> {
    return await this.userService.createOne(body);
  }

  @Delete(":id")
  async deleteOne(@Param() param: { id: number }) {
    return await this.userService.deleteOne(param.id);
  }
}
