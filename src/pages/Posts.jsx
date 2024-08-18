import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);
  // console.log(posts);

  async function fetchPosts() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      setPosts(json);
    } catch (error) {
      console.log("Error fetch status: ", error);
    } finally {
      setLoader(false);
    }
  }

  // async function fetchPosts() {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const json = await res.json();
  //     setPosts(json);
  //   } catch (error) {
  //     console.error("Error fetching posts: ", error);
  //   } finally {
  //     setLoader(false);
  //   }
  // }

  return (
    <main className="posts">
      <div className="pg-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1>Posts</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item active">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/posts" className="text-secondary">
                      Posts
                    </Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="container content">
          {loader ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="row">
              {posts.map((post) => (
                <div className="col-sm-6" key={post.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text"> {post.body} </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
