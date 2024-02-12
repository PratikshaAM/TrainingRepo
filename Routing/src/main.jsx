import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter,Route,createRoutesFromElements} from 'react-router-dom'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Layout from './Layout.jsx'

// const router =createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
      
//       {
//         path:'/',
//         element:<Home/>

//       },
//       {
//         path:'/about',
//         element:<About/>
//       },
//       {
//         path:'/blog',
//         element:<Blog/>
//       }
      
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
