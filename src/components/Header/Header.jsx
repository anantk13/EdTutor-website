import React from 'react'
import {Link, NavLink} from 'react-router-dom'  // Link is used in place of a tag coz a tag redreshes the page but link doesnt in react

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/1048/1048927.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/ask"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to = "/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                         ${isActive ? "text-orange-700": "text-gray-700"}
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to = "/hire"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                         ${isActive ? "text-orange-700": "text-gray-700"}
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                  Hire
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to = "/learn"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                         ${isActive ? "text-orange-700": "text-gray-700"}
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                  Learn
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to = "/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                         ${isActive ? "text-orange-700": "text-gray-700"}
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                  About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to = "/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                         ${isActive ? "text-orange-700": "text-gray-700"}
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                  Contact Us
                                </NavLink>
                            </li>
                           
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}








// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'


// function Header() {
//   const authStatus = useSelector((state) => state.auth.status)
//   const navigate = useNavigate()
//   const navItems = [
//     {
//       name: 'Home',
//       slug: "/",
//       active: true
//     }, 
//     {
//         name: "Hire",
//         slug: "/hire",
//         active: authStatus,
//     },
//     {
//         name: "Learn",
//         slug: "/learn",
//         active: authStatus,
//     },
//     {
//         name: "Contact",
//         slug: "/contact",
//         active: true,
//     },
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//   },
//   {
//       name: "GetStarted",
//       slug: "/getstarted",
//       active: !authStatus,
//   },
//   {
//     name: "About",
//     slug: "/about",
//     active: true,
// },
  
//   ]
//   return (
//     <header className='shadow sticky z-50 top-0 mt-5 mr-20 ml-20'>
//       {/* <Container> */}
//         <nav className=' mt-2  flex flex-wrap justify-between items-center mx-auto max-w-screen-xl  border-gray-200'>
//           <div className='mr-2 mt-2 px-4'>
            
//           </div>
          
           
//           <ul className='flex ml-auto'>
//             {navItems.map((item) =>
//             item.active ? (
//               <li key={item.name}>
//                 <button 
//                 onClick={() => navigate(item.slug)}
//                 className='inline-bock px-6 py-2 duration-200 hover:bg-purple-200 rounded-full'
//                 >{item.name}</button>
//               </li>
//             ) : null
//             )}
            
            
//           </ul>
//         </nav>
//       {/* </Container> */}
//     </header>
//   )
// }

// export default Header

