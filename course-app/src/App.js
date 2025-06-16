import './App.css';
import Score from './components/Score';
import Home from "./components/Home";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import ApiGet from './components/ApiGet';
import ApiGetJoke from "./components/ApiGetJoke";
import ComentAPI from './components/ComentAPI';
import ApiPost from './components/ApiPost';
import MonTchat from './components/MonTchat';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/score"> Score </Link>
        <Link to="/apiget">API</Link>
        <Link to="/apigetjoke">Jokes</Link>
        <Link to ="/comments">Comments API</Link>
        <Link to ="/apipost">API Post</Link>
        <Link to ="/monchat">Mon Chat</Link>
      </nav>

  <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path ="/score" element ={<Score/>}/>
        <Route path='/apiget' element={<ApiGet/>}/>
        <Route path='/apigetjoke' element={<ApiGetJoke/>}/>
        <Route path ="/comments" element={<ComentAPI/>}/>
        <Route path ="/apipost" element={<ApiPost/>}/>
        <Route path ="/monchat" element={<MonTchat/>}/>
      </Routes>
  </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
