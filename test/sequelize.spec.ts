import db from '../src/db/models';
import { UserDto } from '../src/db/dto/userDto';
import { expect } from 'chai';
import { UserMother } from './objectMother/userMother';
import { UserInstance } from '../src/db/models/user';

describe('Sequelize', () => {
  it('should read a single record', async () => {
    const user: UserDto = await db.User.findById(1);
    expect(user.firstname).to.equal('John');
  });

  it('should read a list of records', async () => {
    const users: UserDto[] = await db.User.findAll();
    expect(users).to.be.above(0);
  });

  it('should filter a list of records', async () => {
    const users: UserDto[] = await db.User.findAll({
      where: { email: { [db.Sequelize.Op.like]: 'john.smith' } }
    });

    expect(users).to.equal(1);
  });

  it('should create a new record', async () => {
    let user: UserDto = new UserMother().user;
    user = await db.User.create(user);

    expect(user.id).to.be.ok;
  });

  it('should update an existing record', async () => {
    let user: UserInstance = await db.User.findById(1);
    const update: UserDto = new UserMother().user;
    user = await user.update(update);

    expect(user.firstname).to.equal(update.firstname);
  });

  it('should delete an existing record', async () => {
    let user: UserInstance = await db.User.findById(1);
    await user.destroy();
    user = await db.User.findById(1);

    expect(user).to.be.null;
  });

  it('should delete all records', async () => {
    await db.User.destroy({
      where: { email: { [db.Sequelize.Op.like]: 'john.smith' } }
    });

    const users: UserDto[] = await db.User.findAll({
      where: { email: { [db.Sequelize.Op.like]: 'john.smith' } }
    });

    expect(users).to.equal(0);
  });
});
