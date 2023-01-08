import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Basket from "./pages/basket";
import Catalog from "./pages/catalog";

import Home from "./pages/home";



export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/basket" element={<Basket />} />
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