// import React from 'react'
// import {Link} from'react-router-dom'

// export default function GetStarted() {
//   return (
//     <div class="flex justify-center items-center h-screen">
//   <div class="w-full max-w-lg">
//     <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <div class="flex flex-wrap -mx-3 mb-6">
//         <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//           <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
//             First Name
//           </label>
//           <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
//           <p class="text-red-500 text-xs italic">Please fill out this field.</p>
//         </div>
//         <div class="w-full md:w-1/2 px-3">
//           <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
//             Last Name
//           </label>
//           <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
//         </div>
//       </div>
//       <div class="flex flex-wrap -mx-3 mb-6">
//         <div class="w-full px-3">
//           <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
//             Password
//           </label>
//           <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
//           <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
//         </div>
//       </div>
//       <div class="flex flex-wrap -mx-3 mb-2">
//         <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//           <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
//             City
//           </label>
//           <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
//         </div>
//         <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//           <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
//             State
//           </label>
//           <div class="relative">
//             <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
//               <option>Andhra Pradesh</option>
//               <option>Uttar Pradesh</option>
//               <option>Telangana</option>
//               <option>Tamil Nadu</option>
//             </select>
//             <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//             </div>
//           </div>
//         </div>
//         <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//           <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
//             Zip
//           </label>
//           <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
//         </div>
//       </div>
//       <Link to="/"
//       class="bg-red-800 hover:bg-red-400 text-white font-bold py-2 px-4 flex justify-center mt-6 rounded focus:outline-none focus:shadow-outline" >
//         Register
//       </Link>
//     </form>
//   </div>
// </div>


//   )
// }






import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    city: '',
    state: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Access the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
  
    // Regular expression to check if the input contains only letters
    const lettersRegex = /^[a-zA-Z\s]*$/;
  
    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    } else if (!lettersRegex.test(formData.firstName.trim())) {
      errors.firstName = 'First Name should contain only letters';
    }
  
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    } else if (!lettersRegex.test(formData.lastName.trim())) {
      errors.lastName = 'Last Name should contain only letters';
    }
  
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
  
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
  
    if (!formData.city.trim()) {
      errors.city = 'City is required';
    } else if (!lettersRegex.test(formData.city.trim())) {
      errors.city = 'City should contain only letters';
    }
  
    if (!formData.state.trim()) {
      errors.state = 'State is required';
    }
  
    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit it here
      console.log('Form is valid:', formData);
      navigate('/');
    } else {
      // Update the errors state with the validation errors
      setErrors(errors);
    }
  };
  

  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">First Name</label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${errors.firstName ? 'border-red-500' : ''}`}
                id="firstName"
                type="text"
                placeholder="Jane"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">Last Name</label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${errors.lastName ? 'border-red-500' : ''}`}
                id="lastName"
                type="text"
                placeholder="Doe"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email</label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${errors.email ? 'border-red-500' : ''}`}
                id="email"
                type="email"
                placeholder="example@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">Password</label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${errors.password ? 'border-red-500' : ''}`}
                id="password"
                type="password"
                placeholder="******************"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">City</label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${errors.city ? 'border-red-500' : ''}`}
                id="city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && <p className="text-red-500 text-xs italic">{errors.city}</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state">State</label>
              <select
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${errors.state ? 'border-red-500' : ''}`}
                id="state"
                type="text"
                placeholder="New Mexico"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option>Andhra Pradesh</option>
                <option>Uttar Pradesh</option>
                <option>Telangana</option>
                <option>Tamil Nadu</option>
              </select>
              {errors.state && <p className="text-red-500 text-xs italic">{errors.state}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
          <Link
            className="block text-center mt-4 text-sm text-gray-700 hover:text-orange-700"
            to='/login'
          >
            Already have an account? Sign in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;




