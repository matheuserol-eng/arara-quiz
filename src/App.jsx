import { Route, Routes } from "react-router-dom"
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/loginpage";
import { ThemesPage } from "./pages/ThemesPage";
import { QuestionsPage } from "./pages/QuestionsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/cadastro" element={<SignUpPage />} />
      <Route path="/temas" element={<ThemesPage />} />
      <Route path="/questoes" element={<QuestionsPage />} />
    </Routes> 
  );
}

export default App