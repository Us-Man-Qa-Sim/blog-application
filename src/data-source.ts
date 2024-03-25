import * as dotenv from 'dotenv';
import { SeederOptions } from 'typeorm-extension';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: false,
};

export const dataSourceMigrations: DataSourceOptions & SeederOptions = {
  ...dataSourceOptions,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  seeds: ['src/seeders/*.seeder.ts'],
};

export const dataSource = new DataSource(dataSourceMigrations);
