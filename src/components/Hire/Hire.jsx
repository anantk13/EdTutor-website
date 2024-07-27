import React from 'react'
import { Link } from 'react-router-dom'

export default function Hire() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">Educator Profiles for Hiring</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <img className="w-24 h-24 object-cover rounded-full mb-4 mx-auto" src="https://tse2.mm.bing.net/th?id=OIP.Dn-8K_TiXbuob_1fMEFurQHaE7&pid=Api&P=0&h=180" alt="Educator 1" />
          <h2 className="text-lg font-semibold mb-2">John Singh</h2>
          <p>Masters in Pharma</p>
          <Link to="/payment"
          className="bg-red-800 hover:bg-red-400 text-white px-4 py-2 rounded mt-4">Hire for ₹2499</Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <img className="w-24 h-24 object-cover rounded-full mb-4 mx-auto" src="https://tse3.mm.bing.net/th?id=OIP.pI0484wgkpgW54eUSVWBrwHaE8&pid=Api&P=0&h=180" alt="Educator 2" />
          <h2 className="text-lg font-semibold mb-2">Karishma Sai</h2>
          <p>Masters in Technology</p>
          <Link to="/payment"
          className="bg-red-800 hover:bg-red-400 text-white px-4 py-2 rounded mt-4">Hire for ₹3999</Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <img className="w-24 h-24 object-cover rounded-full mb-4 mx-auto" src="https://tse2.mm.bing.net/th?id=OIP.QR3O50ug7fbko6VBVmuENwHaKX&pid=Api&P=0&h=180" alt="Educator 3" />
          <h2 className="text-lg font-semibold mb-2">Rosy Sharma</h2>
          <p>Financial Manager</p>
          <Link to="/payment"
          className="bg-red-800 hover:bg-red-400 text-white px-4 py-2 rounded mt-4">Hire for ₹3499</Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <img className="w-24 h-24 object-cover rounded-full mb-4 mx-auto" src="https://tse2.mm.bing.net/th?id=OIP.N5LcH8kAD9-TMsI6i1vBhQHaJ4&pid=Api&P=0&h=180" alt="Educator 4" />
          <h2 className="text-lg font-semibold mb-2">Markram Reddy</h2>
          <p>Masters in Accounts and Economics</p>
          <Link to="/payment"
          className="bg-red-800 hover:bg-red-400 text-white px-4 py-2 rounded mt-4">Hire for ₹2999</Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <img className="w-24 h-24 object-cover rounded-full mb-4 mx-auto" src="https://tse2.mm.bing.net/th?id=OIP.LWAPj6qzltSYbFHixJG5IQHaLH&pid=Api&P=0&h=180" alt="Educator 5" />
          <h2 className="text-lg font-semibold mb-2">Bhavya Malik</h2>
          <p>PhD in Political and Home Science</p>
          <Link to="/payment"
          className="bg-red-800 hover:bg-red-400 text-white px-4 py-2 rounded mt-4">Hire for ₹4999</Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <img className="w-24 h-24 object-cover rounded-full mb-4 mx-auto" src="https://tse4.mm.bing.net/th?id=OIP.8BFCoE-MFgMuyIDMdCGYUQHaE5&pid=Api&P=0&h=180" alt="Educator 6" />
          <h2 className="text-lg font-semibold mb-2">Meloni Modi</h2>
          <p>Masters in Journalism</p>
          <Link to="/payment"
          className="bg-red-800 hover:bg-red-400 text-white px-4 py-2 rounded mt-4">Hire for ₹5599</Link>
        </div>
      </div>
    </div>
    )
    }