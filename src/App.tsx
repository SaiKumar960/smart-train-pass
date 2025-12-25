import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<h1>Smart Train Pass Loaded ✅</h1>} />

      {/* TEMP fallback */}
      <Route path="*" element={<h1>App Route Not Found</h1>} />
    </Routes>
  );
}

export default App;
