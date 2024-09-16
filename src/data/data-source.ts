import { DataSource } from 'typeorm';
import config from '../app/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.host,
  port: config.port,
  username: config.userName,
  password: config.password,
  database: config.dbName,
  entities: [],
});
