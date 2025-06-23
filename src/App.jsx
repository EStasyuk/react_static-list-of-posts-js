import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsById(postId) {
  return commentsFromServer.filter(
    comment => commentsFromServer.postId === postId);
}

export const posts = postsFromServer.map(post => ({
  user: getUserById(post.userId),
  comments: getCommentsById(postId)
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
