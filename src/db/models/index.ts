import * as Sequelize from 'sequelize';
import UserFactory from './user';
import UserPermissionFactory from './user-permission';

const env: string = process.env.ENVIRONMENT || 'local';
const config: Sequelize.Options = require(__dirname + '/../config/config.json')[env];
const database: string = config.database || 'test_db';
const username: string = config.username || 'sa';
const password: string = config.password || process.env.SQL_PASSWORD || 'P4$$word';
const sequelize = new Sequelize(database, username, password, config);

const db = {
  sequelize,
  Sequelize,
  User: UserFactory(sequelize),
  UserPermisson: UserPermissionFactory(sequelize)
};

Object.keys(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;
