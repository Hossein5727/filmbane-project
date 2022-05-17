import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { HomePage, MovieData } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movieData/:id" element={<MovieData />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
