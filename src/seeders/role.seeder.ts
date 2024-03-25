import { DataSource } from 'typeorm';
import { Logger } from '@nestjs/common';
import { Seeder } from 'typeorm-extension';
import { rolesData } from './../roles/seed-role';
import { RoleEntity } from './../roles/roles.entity';

export default class RoleSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    try {
      const roleRepository = dataSource.getRepository(RoleEntity);
      const roleAlreadyExist = await roleRepository.find();
      if (roleAlreadyExist.length) return

      await Promise.all(
        rolesData.map(async (r) => {
          const role = new RoleEntity();
          role.title = r.title;
          role.isActive = r.isActive;
          await roleRepository.save(role);
        })
      );

      Logger.log('>>>>>>>>>>>>>>>>ROLES SEEDS SUCCESSFULLY>>>>>>>>>>>>>>>>>>');
    } catch (error) {
      Logger.error(`Error in UserSeeder`);
      throw error;
    }
  }
}
