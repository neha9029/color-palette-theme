import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Theme from "./pages/Theme";
import Mood from "./pages/Mood";
import Login from "./pages/Login";
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route index element={<Homepage />} /> */}
        <Route path="/theme" element={<Theme />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}
