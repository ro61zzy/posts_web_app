import React from 'react';

// Define the props interface
interface PostProps {
  id: number;
  title: string;
  content: string;
  authorName: string;
}

// Functional component with typed props
const Post: React.FC<PostProps> = ({ id, title, content, authorName }) => {
  return (
    <div style={{ border: "1px solid white", padding: "15px" }}>
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default Post;
