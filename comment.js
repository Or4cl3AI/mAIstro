const { Comment, addComment, deleteComment } = require('./comment');
const { Post } = require('./post');
const { User } = require('./user');
const { expect } = require('@jest/globals');

test('Comment function creates a comment with correct properties', () => {
  const user = new User('John Doe', 'john.doe@example.com');
  const post = new Post('Post Title', 'Post Content', user.id);
  const comment = new Comment('Comment Content', user.id, post.id);
  expect(comment.content).toBe('Comment Content');
  expect(comment.userId).toBe(user.id);
  expect(comment.postId).toBe(post.id);
});

test('addComment function adds a comment to a post', async () => {
  const user = new User('Jane Doe', 'jane.doe@example.com');
  const post = new Post('Post Title', 'Post Content', user.id);
  const comment = new Comment('Comment Content', user.id, post.id);
  await addComment(comment);
  expect(post.comments).toContain(comment);
});

test('deleteComment function deletes a comment', async () => {
  const user = new User('Jack Doe', 'jack.doe@example.com');
  const post = new Post('Post Title', 'Post Content', user.id);
  const comment = new Comment('Comment Content', user.id, post.id);
  await addComment(comment);
  await deleteComment(comment.id);
  expect(post.comments).not.toContain(comment);
});
