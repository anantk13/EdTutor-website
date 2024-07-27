import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import Hire from './components/Hire/Hire.jsx'
import Learn from './components/Learn/Learn.jsx'
import Login from './components/Login/Login.jsx'
import GetStarted from './components/GetStarted/GetStarted.jsx'
import Payment from './components/Payment/Payment.jsx'
import Ask from './components/Ask.jsx'
import Thanks from './components/Thanks.jsx'

const Router = createBrowserRouter([
  {  
    path: '/',
    element: <Layout />, // layout has a syntax so it needs to be called from main
    children: [
      {
        path:"",
        element: <Home />
      },
      {
        path: "about",  // slash(/) is already provided so now we can prive anything in path
        element: <About />
      },
      {
       path: "contact",
       element: <Contact />
      },
      {
       path: "user/:userid" ,
       element: <User />,
       
      },
      {
       path: "hire" ,
       element: <Hire />,
       
      },
      {
       path: "github" ,
       element: <Github />,
       
      },
      {
       path: "learn" ,
       element: <Learn />,
       
      }
      
    ]
  },{
    path: "login" ,
    element: <Login/>, 
  },{
    path: "getstarted" ,
    element: <GetStarted />, 
  },
  {
    path: "payment" ,
    element: <Payment />, 
  },
  {
    path: "thanks" ,
    element: <Thanks />, 
  },
  {
    path: "ask" ,
    element: <Ask />, 
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path ='/' element ={<Layout />}>
//     <Route path ='' element = {<Home />} />
//     <Route path ='about' element = {<About />} />
//     <Route path ='contact' element = {<Contact />} />
//     <Route path ='user/:userid' element = {<User />} />    {/*colon is important and whatever written after it will display*/}

//     </Route>
//   )
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router ={Router} />
    </Provider>
  </React.StrictMode>,
)
