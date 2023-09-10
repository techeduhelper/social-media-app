import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import axios from "axios";
import { useAuth } from "./context/auth";
import { Private } from "./private/private.jsx";
import Dashboard from "./pages/Dashboard";
import ForgetPassword from "./pages/ForgetPassword";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [auth, setAuth] = useAuth();

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="user/dashboard" element={<Private />}>
            <Route path="" element={<Dashboard />} />
          </Route>
          <Route
            path="/login"
            element={!auth.user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!auth.user ? <Register /> : <Navigate to="/" />}
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
