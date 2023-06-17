import { Link, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
      {/* <Link to="/" />
      <Routes >
      <Route  path="/" element={<Home/>} />
      </Routes> */}
      <Home />
    </div>
  );
}

export default App;
