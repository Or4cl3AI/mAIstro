const { User, getUser, updateUser } = require('./user');
const { expect } = require('@jest/globals');

test('User function creates a user with correct properties', () => {
  const user = new User('John Doe', 'john.doe@example.com');
  expect(user.name).toBe('John Doe');
  expect(user.email).toBe('john.doe@example.com');
});

test('getUser function retrieves the correct user', async () => {
  const user = new User('Jane Doe', 'jane.doe@example.com');
  const retrievedUser = await getUser(user.id);
  expect(retrievedUser).toEqual(user);
});

test('updateUser function updates user properties correctly', async () => {
  const user = new User('Jack Doe', 'jack.doe@example.com');
  await updateUser(user.id, { name: 'Jackie Doe' });
  const updatedUser = await getUser(user.id);
  expect(updatedUser.name).toBe('Jackie Doe');
});
