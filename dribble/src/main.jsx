import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  Router, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements ,
  Route
} from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Hiring from './pages/Hiring.jsx'
import Jobs from './pages/Jobs.jsx'
import Popular from './pages/Popular.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/> }>
    <Route path='' element={<Home/> }/>
    <Route path='hiring' element={<Hiring/>}/>
    <Route path='shot/popular' element={<Popular/>}/>
    <Route path='jobs' element={<Jobs/>}/>


  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
