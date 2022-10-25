import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import ExampleRef from "./pages/exampeRef";
import Home from "./pages/home";
import Post from "./pages/post";


export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Post/>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path='ref' element={<ExampleRef/>}/>
        <Route path="*" element={<NoMatch />} />
    
      </Routes>
    </div>
  );
}


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}


function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}