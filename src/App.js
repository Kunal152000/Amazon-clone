import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./Stateprovider";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is ---->>>", authUser);
      if (authUser) {
        // the user just logged in or the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the suer is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Layout hideHeaderPaths={["/login"]} />
        <Outlet />
      </BrowserRouter>
    </>
  );
}
const Layout = ({ hideHeaderPaths = [] }) => {
  const { pathname } = useLocation();
  return (
    <div className="app">
      {!hideHeaderPaths.includes(pathname) && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};
export default App;
