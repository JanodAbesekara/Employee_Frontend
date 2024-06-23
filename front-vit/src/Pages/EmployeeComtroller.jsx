import React, { useState, useEffect } from "react";
import Axios from "axios";

function EmployeeController() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get(`https://localhost:7171/api/EmployCon`)
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError("Error fetching employee data");
        console.error(error);
      });
  }, []);

  
  const handelDelete = (id) => {
    Axios.delete(`https://localhost:7171/api/EmployCon/${id}`)
      .then((response) => {
        console.log(response);
        setEmployees(employees.filter((employee) => employee.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }
  


  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      {error && <div className="text-red-500">{error}</div>}
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Name of Employee
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Email
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Department
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Phone number
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {employees.map((employee) => (
            <tr className="hover:bg-gray-50" key={employee.id}>
              <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <h5>{employee.name}</h5>
              </td>
              <td className="px-6 py-4">
                <h5>{employee.email}</h5>
              </td>
              <td className="px-6 py-4">
                <h5>{employee.department}</h5>
              </td>
              <td className="px-6 py-4">
                <h5>{employee.phonenumber}</h5>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    onClick={() => { handelDelete(employee.id) }}
                  >
                    
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeController;
