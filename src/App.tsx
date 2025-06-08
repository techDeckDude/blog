import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [blogPosts, setBlogPosts] = useState<Array<Schema["BlogPost"]["type"]>>([]);

  useEffect(() => {
    client.models.BlogPost.observeQuery().subscribe({
      next: (data) => setBlogPosts([...data.items]),
    });
  }, []);

  function createBlogPost() {
    client.models.BlogPost.create({
      content: window.prompt("Blog post content")});
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createBlogPost}>+ new</button>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new blog post.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;
