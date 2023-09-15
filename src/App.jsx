import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Vlog from "./pages/Vlog/Vlog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vlog" element={<Vlog />} />
      </Routes>
    </>
  );
}

export default App;
