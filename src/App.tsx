import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="prose w-full max-w-none p-8">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
