import dotenv from 'dotenv';
import path from 'path';
dotenv.config({
  path: path.join((process.cwd(), '.env')),
});

export default {

  host:process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  userName:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  dbName:process.env.DB_NAME,

  jwt: {
    secret: process.env.JWT_SECRET,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
};
