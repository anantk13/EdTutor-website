import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
//         <div className="mx-auto w-full max-w-7xl">
//             <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
//                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
//                     <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
//                         <h2 className="text-5xl font-bold sm:text-7xl">
//                             Connect and Learn 
//                             </h2>
//                             <h3 className='font-bold text-3xl sm:text-5xl text-orange-700'> One Stop Solution for educators and students </h3>
//                             <span className="hidden sm:block text-4xl"></span>
                       

//                         {/* <Link
//                             className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
//                             to="/"
//                         >
//                             <svg
//                                 fill="white"
//                                 width="24"
//                                 height="24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                             >
//                                 <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
//                             </svg>
//                             &nbsp; Download now
//                         </Link> */}
//                     </div>
//                 </div>

//                 <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
//                     <img className="w-96  object-cover " src="https://img.freepik.com/premium-vector/student-learning-online-home-online-education-training-courses-learning-video-tutorials_530733-3084.jpg?w=826" alt="image1" />
//                 </div>
//             </aside>

//             <div className="grid  place-items-center sm:mt-0">
//                 <img className="sm:w-full w-48 object-fill" src="https://img.freepik.com/free-vector/online-education-infographics-with-editable-text-illustration_1284-57254.jpg?w=1380" alt="image2" />
//             </div>

//             <h3 className="text-center text-white bg-orange-700 text-2xl sm:text-5xl py-10 font-medium">Unlock Your Potential!</h3>
//         </div>
//     );
// }




<div className="flex flex-col items-center">
             <div className="w-full m-0 p-0">
             <div className="py-20 bg-white">
          <div className=" container m-auto px-6 text-gray-600  ">
              <div className=" md:flex  lg:items-center ">
                  <div className="md:1/2 lg:w-1/2 ">
                      <img
                          src='https://img.freepik.com/premium-vector/student-learning-online-home-online-education-training-courses-learning-video-tutorials_530733-3084.jpg?w=826'
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12 sm:text-right sm:ml-auto ">
                      <h1 className="text-6xl sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-800 to-orange-800">
                      Connect and Learn                     </h1>
                      <h2 className='text-black text-3xl sm:text-4xl bg-clip-text mt-3'>
                      One Stop Solution for </h2>
                      <h2 className='text-black text-3xl sm:text-4xl bg-clip-text '>
                      educators and students
                      </h2>
                      
                  </div>
              </div>
          </div>
      </div>
              <div className="bg-cover bg-center h-screen md:h-screen m-0 p-0">
                <img className='w-full h-full object-cover' src="https://img.freepik.com/free-vector/online-education-infographics-with-editable-text-illustration_1284-57254.jpg?w=1380" alt="background 3" />
              </div>
              <h3 className="text-center text-white bg-orange-700 text-2xl sm:text-5xl py-10 font-medium">Unlock Your Potential!</h3>
           </div>
         </div>
        )
    }
