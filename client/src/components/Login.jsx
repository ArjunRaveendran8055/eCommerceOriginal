import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);

  return (
    <div className="h-screen flex w-full bg-gray-lightd justify-center items-center bg-gray-dark sm:px-2">
      <div
        className="loginMain bg-white border-[1px] rounded-2xl sm:basis-full md:basis-[60%] lg:basis-[35%]  
      flex flex-col justify-between gap-14 items-stretch shadow-2xl "
      >
        <div className="title-container flex flex-col items-center justify-center pt-8">
          <div className="title">
            <span className="text-3xl text-violet">Welcome BacK!</span>
          </div>
          <div className="">
            <span className="text-gray">LogIn to Your Account</span>
          </div>
        </div>
        <div className="login-form sm:p-2 lg:p-4 flex flex-col gap-4">
          <div className="emailcontainer flex flex-col text-xl gap-4 items-stretch">
            <label htmlFor="email">Email</label>
            <div className="relative w-full flex">
              <input
                type="email"
                className="h-10 rounded-md border-[1px] pl-2 w-full shadow-md"
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="password-container flex flex-col text-xl gap-4">
            <label htmlFor="password">Password</label>
            <div className="relative flex w-full ">
              <input
                type={visible ? "text": "password"}
                className="h-10 rounded-md border-[1px] pl-2 w-full shadow-md"
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-2"
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-2"
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
          </div>
          <div className="forgot-pass-container flex w-full flex-col gap-3">
            <div className="flex items-center  justify-start gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 focus:ring-darkblue cursor-pointer"
                name="remember-me"
                value="remember me"
              />
              <label htmlFor="remember-me" className="  font-enriq-600">Remember Me</label>
            </div>
            <span className="underline underline-offset-4 font-Playfiar-600 text-navyblue cursor-pointer pl-6">Forgot Password?</span>
          </div>
        </div>
        <div className="btn-signUpContainer flex flex-col items-center justify-center gap-5 pb-2">
          <button className="px-5 py-2 border-2 border-violet rounded-3xl bg-purple hover:shadow-darkblue shadow-lg duration-100 text-gray-light">
            Submit
          </button>
          <div className="signup-container">
            Dont have an Account ?{" "}
            <span className="underline text-blue underline-offset-2"><Link to='/signUp'>sign Up</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
