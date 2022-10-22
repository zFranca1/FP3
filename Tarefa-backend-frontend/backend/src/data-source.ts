import "reflect-metadata";
import { DataSource } from "typeorm";

import { createUser1663943193093 } from "./database/migrations/1663943193093-create_user";
import { CreatePostTable1665152078057 } from "./database/migrations/1665152078057-CreatePostTable";
import { CreateImageTable1665152727793 } from "./database/migrations/1665152727793-CreateImageTable";
import { CreateAccountTable1666272460298 } from "./database/migrations/1666272460298-CreateAccountTable";

import Image from "./models/Image";
import Post from "./models/Post";
import Account from "./models/Account";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "ifsp",
  database: "db_aula",
  synchronize: false,
  logging: false,
  entities: [Account, Post, Image],
  migrations: [
    createUser1663943193093,
    CreatePostTable1665152078057,
    CreateImageTable1665152727793,
    CreateAccountTable1666272460298
  ],
  subscribers: [],
});
