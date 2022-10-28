import React from "react";

//import Routes,Route
import { Routes, Route } from "react-router-dom";

//import pages
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import CreateListing from "./pages/CreateListing";

//import components
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

//import ToastContainer
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/create-listing" element={<CreateListing />} />
      </Routes>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={2000}
        closeOnClick
        pauseOnHover={false}
      />
    </>
  );
};

export default App;
