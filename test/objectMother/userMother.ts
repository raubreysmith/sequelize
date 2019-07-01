import { UserDto } from '../../src/db/dto/userDto';

export class UserMother {
  get user(): UserDto {
    return {
      firstname: 'John',
      lastname: 'Smith',
      email: 'john.smith@test.com'
    };
  }
}
