import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { Repository } from 'typeorm';

export interface IUser {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  password: string;
  roleIds: number[];
  isDeleted: boolean,
  isActive: boolean,
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) { }

  async findOne(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async find(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  createOne(data: UserEntity): Promise<UserEntity> {
    const userCreated = this.userRepository.create(data);
    return this.userRepository.save(userCreated);
  }

  async deleteOne(id: number): Promise<any> {
    return await this.userRepository.delete({ id });
  }
}
