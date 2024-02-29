import "../styles/App.css";
import axios from "axios";
import Post from "./Post";

function App() {
  axios.interceptors.request.use(async (config) => {
    config.headers['projectid'] = "astmz951srsh";
    return config;
  })
  return (
    <div className="App">
      <Post />
    </div>
  )
}

export default App;
