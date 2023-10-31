"use client";
import { logIn, setEmail, setPassword } from "@/redux/features/login-slice";
import { store, useLoginSelector } from "@/redux/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../services/AuthService";
import { useRouter } from "next/navigation";

const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();
  const email = useLoginSelector((state) => state.loginReducer.email);
  const password = useLoginSelector((state) => state.loginReducer.password);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      localStorage.clear();
      sessionStorage.clear();
      const auth = await authService.login(email, password);
      if (auth) {
        setUser(auth);
        localStorage.setItem("user", JSON.stringify(auth));
        const session = window.sessionStorage;
        router.push("/dashboard");
        return Response.json([user, session]);
      }
    } catch (error) {
      console.log(error);
      setUser({});
    }
    dispatch(logIn());
  };
  return (
    <>
      <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            LaX
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="w-full input input-bordered"
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="w-full input input-bordered"
                onChange={handlePasswordChange}
              />
            </div>
            <a
              href="#"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <div>
              <button className="btn btn-block" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
