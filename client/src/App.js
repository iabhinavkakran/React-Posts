import "./App.css";
import { Outlet } from "react-router-dom";
import PostsList from "./components/PostsList";

function App() {
  return (
    <div>
      <Outlet />
      <PostsList />
    </div>
  );
}

export default App;

export async function postLoader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
