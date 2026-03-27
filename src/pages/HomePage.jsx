import PostList from "../components/PostList";
import AddPostForm from "../components/AddPostForm";
import PostCount from "../components/PostCount";
import { useState } from "react";

function HomePage() {
  const [posts, setPosts] = useState([]);

  function handleAddPost(newPost) {
    setPosts([newPost, ...posts]);
  }

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "0 1rem" }}>
      <AddPostForm onAddPost={handleAddPost} />
      <PostCount count={posts.length} />
      <PostList posts={posts} />
    </div>
  );
}

export default HomePage;
