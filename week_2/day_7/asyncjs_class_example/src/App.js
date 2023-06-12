import './App.css';
import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import PostTable from './components/PostTable';
import { Post } from './models/post';

function App() {
  const [posts, setPosts] = useState([]);


  const url = 'https://jsonplaceholder.typicode.com/'
  async function fetchPosts() {
    //fetch API 
    const res = await fetch(url + 'posts', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();
    console.log(data);

    let postData = data.map((post) => {
      return new Post(post.id, post.title, post.body, post.userId);
    })

    // console.log(postData);

    setPosts(postData);
  }

  async function fetchApiPost() {
    let url = "http://localhost:3000/"
    const res = await fetch(url + 'posts', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();
    console.log(data);
  }

  async function createPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: "hello", 
        body: "body of hello", 
        userId: 122,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = await res.json();
    console.log(data);
  }


  return (
    <div className="text-center mt-5 mx-5">
      <button className="btn btn-primary me-1" onClick={fetchPosts}> Fetch Posts</button>

      <button className="btn btn-secondary mx-1" onClick={fetchApiPost}> Fetch Our API Post</button>

      <button className="btn btn-secondary ms-1" onClick={createPost}> Create Post</button>
      
      <PostTable posts={posts}></PostTable>
    </div>
  );
}

export default App;
