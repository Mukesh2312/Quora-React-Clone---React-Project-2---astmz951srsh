import "../styles/App.css";
import axios from "axios";
import Post from "./Post";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";


function App() {
  axios.interceptors.request.use(async (config) => {
    config.headers['projectid'] = "astmz951srsh";
    return config;
  })

  // const questionHandler = async () => {
  //   await axios.get('https://academics.newtonschool.co/api/v1/quora/post/',{body:{}}).then((Response) => {
  //     console.log(Response.data.data)
  //     setPost(Response.data.data)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App;
