import * as Sequelize from 'sequelize';
import { UserDto } from '../dto/userDto';

export type UserInstance = Sequelize.Instance<UserDto> & UserDto;

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<UserDto> = {
    firstname: { type: Sequelize.STRING, allowNull: false },
    lastname: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    created: { type: Sequelize.STRING, allowNull: true },
    lastAccess: { field: 'last_access', type: Sequelize.STRING, allowNull: true }
  };

  return sequelize.define<UserInstance, UserDto>('User', attributes, {
    freezeTableName: true,
    timestamps: false,
    schema: 'dbo'
  });
};
