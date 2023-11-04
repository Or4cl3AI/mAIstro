const { Post, createPost, deletePost } = require('./post');
const { User } = require('./user');
const { expect } = require('@jest/globals');

test('Post function creates a post with correct properties', () => {
  const user = new User('John Doe', 'john.doe@example.com');
  const post = new Post('Post Title', 'Post Content', user.id);
  expect(post.title).toBe('Post Title');
  expect(post.content).toBe('Post Content');
  expect(post.userId).toBe(user.id);
});

test('createPost function creates a post for a specific user', async () => {
  const user = new User('Jane Doe', 'jane.doe@example.com');
  const post = await createPost('Post Title', 'Post Content', user.id);
  expect(user.posts).toContain(post);
});

test('deletePost function deletes a post', async () => {
  const user = new User('Jack Doe', 'jack.doe@example.com');
  const post = await createPost('Post Title', 'Post Content', user.id);
  await deletePost(post.id);
  expect(user.posts).not.toContain(post);
});
