import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/shared/Layout";
import Art from "./pages/Art";

function App() {
  return (
    <>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Art/:id" element={<Art />}></Route>
          </Routes>
        </Layout>
    </>
  );
}

export default App;
