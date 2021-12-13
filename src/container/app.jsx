import { MoviesGrid } from "../components/MoviesGrid";
import styles from "../App.module.css";
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";
import { MovieDetails } from "../pages/MovieDetails";
import { LandingPage } from "../pages/LandingPage";
import RegisterForm from "../components/RegisterForm";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
        <Link to="/Register" >
          Registrar
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={ <MovieDetails />}/>
          <Route path="/" element={<LandingPage />}/>
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/Register" element={<RegisterForm/>} />
        </Routes>
      </main>
    </Router>
  );
}
