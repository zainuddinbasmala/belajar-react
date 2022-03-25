import './App.css';
import Detail from './components/Detail.jsx';
import Home from './components/Home.jsx';
import Layout from './components/Layout.jsx';
import { Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:productName" element={<Detail/>}/>
    </Routes>
    
  );
}

export default App;