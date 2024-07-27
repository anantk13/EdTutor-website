import React from 'react';
import { Link } from 'react-router-dom';

const UserTypeSelection = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r ">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">You are a...</h2>
        <div className="flex flex-col space-y-4">
          <Link
            to="/getstarted"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:shadow-outline"
          >
            Student
          </Link>
          <Link
            to="/getstarted"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:shadow-outline"
          >
            Tutor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;
