import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* HOME ROUTE */}
      <Route path="/" element={<h1>Smart Train Pass App Loaded ✅</h1>} />

      {/* CATCH-ALL (optional) */}
      <Route path="*" element={<h1>404 - Route Not Found</h1>} />
    </Routes>
  );
}

export default App;
