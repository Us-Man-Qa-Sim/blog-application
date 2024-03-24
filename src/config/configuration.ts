import { join } from 'path';

export default () => {
  const databasePG = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    migrationsRun: true,
    autoLoadEntities: true,
    logging: true,
    migrations: [join(__dirname, '../migrations', '*{ts,js}')],
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  };

  return {
    PORT: parseInt(process.env.PORT, 10),
    databasePG,
    get(key: string): string {
      return process.env[key];
    },
  };
};
