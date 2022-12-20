import React from 'react';
import Post from './Posts';
import Header from './Header';

const posts = [
  {
    title: 'Title#01',
    subtitle: 'Sub#01',
    likes: 20,
  },
  {
    title: 'Title#02',
    subtitle: 'Sub#02',
    likes: 10,
  },
  {
    title: 'Title#03',
    subtitle: 'Sub#03',
    likes: 50,
  },
];

function App() {
  return (
    <>
      <Header title='sobrescreveu'>
        <h2>Posts da Semana</h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{ title: post.title, subtitle: post.subtitle }}
        />
      ))}
    </>
  );
}

export default App;
