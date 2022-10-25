import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import ExampleRef from "./pages/exampeRef";
import ExampleContext from "./pages/exampleContext";
import Home from "./pages/home";
import Post from "./pages/post";


export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Post/>} />

        <Route path='ref' element={<ExampleRef/>}/>
        <Route path="context" element={<ExampleContext />} />
        <Route path="*" element={<NoMatch />} />
    
      </Routes>
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