import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { HomePage, MovieData, SignupPage } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="w-full">
      <Layout>
        <Routes>
          <Route path="/movieData/:id" element={<MovieData />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
