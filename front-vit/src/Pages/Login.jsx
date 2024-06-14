import Footer from "./Component/Foooter.jsx";
import Navbar from "./Component/Navbar.jsx";
import Axios from "axios";
import { useState } from "react";


function Login() {

  const[username, setUsername] = useState("");
  const[password,setpassword] = useState("");

const handleLogin = (e)=>{
  e.preventDefault();

 const paylord = {
  Email :username,
  Password:password,
 }
  console.log(paylord);
 try{
   const reaponse = Axios.post('https://localhost:7171/api/Employee/Login',paylord);
  // const { data } = response;
  // const token = data.token;
  // localStorage.setItem("EMPLOYERR", JSON.stringify(token));

  //  if(token){
     
   // }else{
    //  window.alert("Error");
   // }
   window.alert(reaponse.data);

   
  } catch (error) {
    window.alert(error.message);
  }
};

  return (
    <div>
      <Navbar />
     
      <div className="bg-gray-100 flex justify-center items-center h-screen mt-5 mb-10">
        {/* Left: Image */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src="https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form action="#" method="POST" onSubmit={handleLogin}>
            {/* Username Input */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={(e)=>setUsername(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e)=>setpassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              />
              <label htmlFor="remember" className="text-gray-600 ml-2">
                Remember Me
              </label>
            </div>
            {/* Forgot Password Link */}
            <div className="mb-6 text-blue-500">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
          </form>
          {/* Sign up Link */}
          <div className="mt-6 text-blue-500 text-center">
            <a href="/Register" className="hover:underline">
              Sign up Here
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
