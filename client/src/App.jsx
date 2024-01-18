import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage, SignUpPage } from "./Routes";


const App = () => {
  return (
    <Routes>
      <Route path="/logIn" element={<LoginPage/>} />
      <Route path="/signUp" element={<SignUpPage/>}/>

    </Routes>
  );
};

export default App;
