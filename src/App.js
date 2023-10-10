import AboutPage from "./pages/AboutPage/AboutPage";
import BookDeatailPage from "./pages/BookDetailPage/BookDeatailPage";
import BookPage from "./pages/BookPage/BookPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/books" element={<ProtectedRoutes Component={BookPage}/>}/>
        <Route path="/books/detail/:id" element={<ProtectedRoutes Component={BookDeatailPage}/>}/>
        <Route path="/about" element={<ProtectedRoutes Component={AboutPage}/>}/>
        <Route path="/contact" element={<ProtectedRoutes Component={ContactPage}/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
