import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Books from './components/Books';
import Blog from './components/Blog';
import Audio from './components/Audio';
import About from './components/About';
import { ContactUs } from './components/ContactUs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"books",
        element: <Books></Books>,
        loader: ()=> fetch("https://api.itbook.store/1.0/new")
      },
      {
        path:"blog",
        element: <Blog></Blog>
      },
      {
        path:"audio",
        element: <Audio></Audio>
      },
      {
        path:"about",
        element: <About></About>
      },
      {
        path:"contact",
        element: <ContactUs></ContactUs>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
