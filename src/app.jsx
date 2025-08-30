import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Theme from "./pages/Theme";
import Mood from "./pages/Mood";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="theme" element={<Theme />} />
        <Route path="mood" element={<Mood />} />
      </Routes>
    </BrowserRouter>
  );
}
