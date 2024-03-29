import "../styles/App.css";
import axios from "axios";
import Post from "./Post";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";


function App() {
  axios.interceptors.request.use(async (config) => {
    config.headers['projectid'] = "astmz951srsh";
    return config;
  })


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App;
