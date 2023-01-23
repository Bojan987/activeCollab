import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="appWrapper">
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
