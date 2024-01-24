import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleFileUpload = (e) => {
    // console.log("some")
    const file = e.target.files[0];
    setAvatar(file);
  };
  return (
    <div className="h-screen flex w-full bg-gray-lightd justify-center items-center bg-gray-dark sm:px-2">
      <div
        className="loginMain bg-white border-[1px] rounded-2xl sm:basis-full md:basis-[60%] lg:basis-[33%]  
    flex flex-col justify-between gap-10 items-stretch shadow-2xl "
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
                type={visible ? "text" : "password"}
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
        <div className="fileUploadContainer flex w-full items-stretch justify-center">
          <label
            htmlFor="avatar"
            className="book block text-sm  font-medium text-gray"
          ></label>
          <div className="mt-2 flex items-center">
            <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
              {avatar ? (
                <img
                  src={URL.createObjectURL(avatar)}
                  alt="avatar"
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                <RxAvatar className="h-8 w-8" />
              )}
            </span>
            <span className="flex">
              <label
                htmlFor="file-input"
                className="ml-5 flex items-center justify-center px-4 py-2 border-gray-light 
              text-gray-dark bg-gray-light hover:bg-gray "
              >
              <span>Upload Photo</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.png,.jpeg"
                    onChange={handleFileUpload}
                    className="sr-only"
                  />
              </label>
            </span>
          </div>
        </div>
        <div className="btn-signUpContainer flex flex-col items-center justify-center gap-5 pb-2">
          <button className="px-5 py-2 border-2 border-purple ring-1 ring-darkblue hover:border-violet rounded-3xl bg-violet hover:bg-darkblue hover:shadow-darkblue shadow-md duration-100 text-gray-light">
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
