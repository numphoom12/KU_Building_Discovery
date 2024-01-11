import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import HomePage from "./pages/Home/HomePage";
import Photo from "./pages/Photo/Photo";
import Result from "./pages/Result/Result";
import Manual from "./pages/Manual/Manual";
//import Wave from "./components/Wave/Wave";

//import History from "./pages/History/History";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
                <Manual />
                {/* <Wave /> */}
              </Layout>
            }
          />

          <Route
            path="/photo"
            element={
              <Layout>
                <Photo />
              </Layout>
            }
          />

          <Route
            path="/result"
            element={
              <Layout>
                <Result />
              </Layout>
            }
          />

          {/* <Route
            path="/history"
            element={
              <Layout>
                <History />
              </Layout>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
