import "./App.css";
import Login from "./Compnents/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Registration from "./Compnents/Registration";

import "./index.css";
import Home from "./Compnents/Home";
import { AuthProvider } from "./context/AuthContext";
import MainPage from "./Compnents/MainPage";
import OAuth2Redirect from "./Compnents/OAuth2Redirect";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/oauth2/redirect" element={<OAuth2Redirect />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
