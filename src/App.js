import React from "react";
import { Routes, Route } from "react-router-dom";
import Newapp from "./Newapp.js";
import Signup from "./Signup.js";
import Login from "./Login.js";
import { UserAuthContextProvider } from "./UserAuthContext.js";
import ProtectedRoute from "./ProtectedRoute.js";
const App = () => {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/movie"
          element={
            <ProtectedRoute>
              <Newapp />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserAuthContextProvider>
  );
};

export default App;
