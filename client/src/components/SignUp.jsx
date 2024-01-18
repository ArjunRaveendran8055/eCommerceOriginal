import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    name:"",
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
            <span className="text-3xl text-violet">Welcome User!</span>
          </div>
          <div className="">
            <span className="text-gray">Create Your Account</span>
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
          <div className="namecontainer flex flex-col text-xl gap-4 items-stretch">
            <label htmlFor="name">Full Name</label>
            <div className="relative w-full flex">
              <input
                type="text"
                className="h-10 rounded-md border-[1px] pl-2 w-full shadow-md"
                value={user.name}
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}
                autoComplete="name"
              />
            </div>
          </div>
          <div className="password-container flex flex-col text-xl gap-4">
            <label htmlFor="password">Password</label>
            <div className="relative flex w-full ">
              <input
                type={visible ? 'text':"password"}
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
        
        </div>
        <div className="btn-signUpContainer flex flex-col items-center justify-center gap-5 pb-2">
          <button className="px-5 py-2 border-2 border-purple ring-1 ring-red hover:border-violet rounded-3xl bg-purple hover:shadow-darkblue shadow-lg duration-100 text-gray-light">
            Submit
          </button>
          <div className="signup-container">
            Already have an Account ?{" "}
            <span className="underline text-blue underline-offset-2">
              <Link to="/logIn">LogIn</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
