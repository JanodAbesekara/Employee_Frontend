import  { useState } from "react";
import Axios from "axios";

function Registration() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      window.alert("Password does not match");
      return;
    }

    const payload = {
      Name: name,
      Department: department,
      Email: email,
      Password: password,
      Phonenumber: phoneNumber,
    };

    try {
      console.log(payload);
      const response = await Axios.post('https://localhost:7171/api/Employee/Register', payload);
      window.alert("Registered Succfully");
      console.log(response.data);
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center mt-5">
      <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
        Welcome to My Company
      </h1>
      <form
        action="#"
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="name"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="department"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Department:
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="phoneNumber"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="email"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="password"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="confirmPassword"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
        >
          Register
        </button>
      </form>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-300">
          Already have an account?{" "}
        </span>
        <a href="/login" className="text-blue-500 hover:text-blue-600">
          Login
        </a>
      </div>
    </div>
  );
}

export default Registration;
