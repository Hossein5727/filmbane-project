import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { EditUserPage, HomePage, MovieData, SignupPage } from "./pages";
import "./App.css";
import { useState } from "react";
import "animate.css";

function App() {
  const [userItems, setUserItems] = useState([]);

  return (
    <div className="w-full">
      <Layout userItems={userItems} setUserItems={setUserItems}>
        <Routes>
          <Route path="/movieData/:id" element={<MovieData />} />
          <Route
            path="/signup"
            element={
              <SignupPage setUserItems={setUserItems} userItems={userItems} />
            }
          />
          <Route path="/edituser" element={<EditUserPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
