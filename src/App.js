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
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
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
  const promise = loadStripe(
    "pk_test_51MsivwSJOPEYFy3X14hVpBulOcByT58X7o7FzdV9jOkOMHUbz3SCCXgfcBbfFHh2RvjOfLbyykqMFgZE1aUVeG0700UVnAsuKF"
  );
  const { pathname } = useLocation();
  return (
    <div className="app">
      {!hideHeaderPaths.includes(pathname) && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </div>
  );
};
export default App;
