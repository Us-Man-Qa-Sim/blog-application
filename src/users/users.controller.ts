import { IUser, UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService
  ) { }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<IUser> {
    const user = await this.userService.findOne(id);
    return user;
  }

  @Get()
  async find(): Promise<IUser[]> {
    const users = await this.userService.find();
    return users;
  }

  @Post()
  async createOne(@Body() body: IUser): Promise<IUser[]> {
    const users = await this.userService.createOne(body);
    return users;
  }

  @Delete(":id")
  async deleteOne(@Param() param: { id: number }) {
    return await this.userService.deleteOne(param.id);
  }
}
