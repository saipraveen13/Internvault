import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Internships } from "./pages/internships";
import { Navbar } from "./components/navbar";
// import Home from "./pages/Home";
import {Resumes} from "./pages/resumes";
import {Prompt} from "./pages/prompt";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/resumes" element={<Resumes />} />
        <Route path="/prompt" element={<Prompt />} />
      </Routes>
    </>
  );
}

export default App;
