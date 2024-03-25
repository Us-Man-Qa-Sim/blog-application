
import { DataSource } from 'typeorm';
import { Logger } from '@nestjs/common';
import { Seeder } from 'typeorm-extension';
import { usersData } from './../users/seed-user';
import { RoleEntity } from './../roles/roles.entity';
import { UserEntity } from './../users/users.entity';

export default class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    try {
      const roleRepository = dataSource.getRepository(RoleEntity);
      const usersRepository = dataSource.getRepository(UserEntity);

      for (const user of usersData) {
        const isExistingUser = await usersRepository.findOne({
          where: { email: user.email, phoneNumber: user.phoneNumber },
        });
        if (!isExistingUser) {
          const gettingSuperAdmin = await roleRepository.findOne({ where: { title: "super-admin" } });
          if (!gettingSuperAdmin) return

          const userObj = usersRepository.create(user);
          userObj.roles = [gettingSuperAdmin];
          await usersRepository.save(userObj);
          await roleRepository.save(gettingSuperAdmin);
          Logger.log('>>>>>>>>>>>>>>>>ADMIN SEEDS SUCCESSFULLY>>>>>>>>>>>>>>>>>>');
        }
      }
    } catch (error) {
      Logger.error(`Error in Admin Seeder`, error);
      throw error;
    }
  }
}
