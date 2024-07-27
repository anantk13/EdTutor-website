
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let errors = {};
//     if (!formData.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!formData.password) {
//       errors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//     }

//     if (Object.keys(errors).length === 0) {
//       // Form is valid, you can submit it here
//       console.log('Form is valid:', formData);
//     } else {
//       // Update the errors state with the validation errors
//       setErrors(errors);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 bg-white p-8 rounded shadow-md">
//       <h2 className="text-2xl mb-4 font-semibold">Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
//           <input
//             type="email"
//             placeholder='email'
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-orange-500`}
//           />
//           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
//           <input
    
//             type="password"
//             placeholder='password'
//             name="password"
//             id="password"
//             value={formData.password}
//             onChange={handleChange}
//             className={`w-full px-3 py-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-orange-600`}
//           />
//           {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//         </div>
//         <button type="submit" className="bg-orange-700 text-white py-2 px-4 rounded hover:bg-orange-800 focus:outline-none focus:bg-orange-600"
       
//         >Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Access the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;

    e.preventDefault();
    let errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    } else if (!passwordRegex.test(formData.password)) {
      errors.password = 'Password must contain at least one number, one special character, and start with a capital letter';
    }

    if (Object.keys(errors).length === 0) {
      // Form is valid, navigate to the target page
      navigate('/'); // Use navigate function to navigate to '/dashboard'
    } else {
      // Update the errors state with the validation errors
      setErrors(errors);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl mb-4 font-semibold">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-orange-600`}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <button type="submit" className="bg-orange-700 text-white py-2 px-4 rounded hover:bg-orange-800 focus:outline-none focus:bg-orange-600">Login</button>
      </form>
    </div>
  );
};

export default Login;
