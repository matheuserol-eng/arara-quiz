import { Route, Routes } from "react-router-dom"
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/loginpage";
import { ThemesPage } from "./pages/ThemesPage";
import { QuestionsPage } from "./pages/QuestionsPage";
import { ResultsPage } from "./pages/ResultsPage";
import { RankingPage } from "./pages/RankingPage";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/temas" element={<ThemesPage />} />
        <Route path="/temas/:id/questoes" element={<QuestionsPage />} />
        <Route path="/resultados" element={<ResultsPage />} />
        <Route path="/ranking" element={<RankingPage />} />

      </Routes>
    </>
  );
}

export default App