import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [blogPosts, setBlogPosts] = useState<Array<Schema["BlogPostType"]["type"]>>([]);

  useEffect(() => {
    // client.models.BlogPostType.observeQuery().subscribe({
    //   next: (data) => setBlogPosts([...data.items]),
    // });
  }, []);

  function createBlogPost() {
    const title = ""+window.prompt("Enter a title for your post");
    const content = ""+window.prompt("Enter the content for your post");
    const post = client.mutations.addBlogPost({
      title: title,
      content: content
    });
    setBlogPosts(post);
    // client.models.BlogPost.create({
    //   content: window.prompt("Blog post content")});
  }

  return (
    <main>
      <h1>My Blog Posts</h1>
      <button onClick={createBlogPost}>+ new</button>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
      <div>
      </div>
    </main>
  );
}

export default App;
