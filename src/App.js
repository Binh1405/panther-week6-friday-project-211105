import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import PublicNavbar from "./components/PublicNavbar";
import DetailPage from "./pages/DetailPage";
import Homepage from "./pages/Homepage";
import Login from "./pages/LoginPage/Login";
import NotFound from "./pages/NotFound"
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <PublicNavbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/profile" element={<ProfilePage/>}/>
        <Route exact path="/register" element={<RegisterPage/>}/>
        <Route exact path="/products/:id" element={<DetailPage/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
