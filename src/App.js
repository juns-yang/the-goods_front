import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationMenu from "./Components/NavigationMenu/NavigationMenu.jsx";
import RegisterMenu from "./Components/RegisterMenu/RegisterMenu.jsx";
import LoginMenu from "./Components/LoginMenu/LoginMenu.jsx";
import RegisterPage from "./Components/RegisterPage/RegisterPage.jsx";
import FindEmail from "./Components/FindEmail/FindEmail.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Routes>
            <Route path="/login" element={<LoginMenu />} />
            <Route path="/register" element={<RegisterMenu />} />
            <Route path="/registerpage" element={<RegisterPage />} />
            <Route path="/findemail" element={<FindEmail />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
