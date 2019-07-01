import * as Sequelize from 'sequelize';
import { UserPermissionDto } from '../dto/userPermissionDto';

type UserPermissionInstance = Sequelize.Instance<UserPermissionDto> & UserPermissionDto;

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<UserPermissionDto> = {
    userId: { field: 'user_id', type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
    permissionId: { field: 'permission_id', type: Sequelize.INTEGER, allowNull: false }
  };

  return sequelize.define<UserPermissionInstance, UserPermissionDto>('user_permission', attributes, {
    freezeTableName: true,
    timestamps: false,
    schema: 'dbo'
  });
};
