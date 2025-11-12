import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/loginpage";
import { ThemesPage } from "./pages/ThemesPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/themes" element={<ThemesPage />} />
    </Routes> 
  );
}

export default App