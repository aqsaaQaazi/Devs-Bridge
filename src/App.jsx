import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

import Home from './Pages/HomePage';
import MainLayout from './layouts/MainLayout';
import Jobs from './Pages/Jobs';
import NotFoundError from './Pages/foroFour';


const router = createBrowserRouter(createRoutesFromElements(
 
    <Route path="/" element={<MainLayout/>}>

      <Route index element={<Home/>} />
      <Route path="/jobs" element={<Jobs/>}/>
      <Route path="*" element={<NotFoundError/>}/>

    </Route>
  )
);

export default function Wrapper() {

  return (


  <RouterProvider router={router} />

  
  )
}
