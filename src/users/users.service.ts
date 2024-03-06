import { Injectable } from '@nestjs/common';

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
  private users: IUser[] = [
    {
      id: 1,
      name: 'Usman Qasim',
      email: 'usmanqasim0900@gmail.com',
      phoneNumber: '',
      avatar: './ssas/sdsd.jpg',
      password: '1122',
      roleIds: [1, 2, 3, 4, 5, 6],
      isDeleted: false,
      isActive: true,
    },
    {
      id: 2,
      name: 'Hassan Qasim',
      email: 'hassanqasim0900@gmail.com',
      phoneNumber: '',
      avatar: './ssas/sdsd.jpg',
      password: '1122',
      roleIds: [1, 2, 3, 4, 5, 6],
      isDeleted: false,
      isActive: true,
    },
    {
      id: 3,
      name: 'Hussain Qasim',
      email: 'hussainqasim0900@gmail.com',
      phoneNumber: '',
      avatar: './ssas/sdsd.jpg',
      password: '1122',
      roleIds: [1, 2, 3, 4, 5, 6],
      isDeleted: false,
      isActive: true,
    }
  ];

  async findOne(id: number) {
    return this.users.find(user => user.id == id);
  }

  find() {
    return this.users;
  }

  createOne(data: IUser): IUser[] {
    this.users.push(data);
    return this.users;
  }

  deleteOne(id: number): IUser[] {
    this.users = this.users.filter((user) => user.id != id);
    return this.users;
  }
}
