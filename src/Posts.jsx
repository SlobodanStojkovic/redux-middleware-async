import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./actions";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => {
        return <h3 key={post.id}>{post.title}</h3>;
      })}
    </div>
  );
};

export default Posts;
