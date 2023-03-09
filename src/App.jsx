import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
