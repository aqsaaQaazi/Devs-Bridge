import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

import Home from './Pages/HomePage';
import Navbar from './components/header';
import MainLayout from './layouts/MainLayout';
import Jobs from './Pages/Jobs';


const router = createBrowserRouter(createRoutesFromElements(
 
    <Route path="/" element={<MainLayout/>}>

      <Route index element={<Home/>} />
      <Route path="/jobs" element={<Jobs/>}/>

    </Route>
  )
);

export default function Wrapper() {

  return (


  <RouterProvider router={router} />

  
  )
}
