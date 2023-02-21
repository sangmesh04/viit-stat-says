import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Statistics from "./Components/Statistics";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stats" element={<Statistics />} />
      </Routes>
    </div>
  );
}

export default App;
