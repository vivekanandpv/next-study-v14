import * as React from 'react';

//  npm run build
//  npm run start

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  posts: Post[];
}

const Posts: React.FunctionComponent<PostsProps> = ({ posts }) => {
  return (
    <>
      <h4>Posts Component</h4>
      <table className='table table-bordered table-sm'>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id}>
              <td>{p.userId}</td>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default Posts;
