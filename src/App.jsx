import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Doctor from './components/Doctor'
import Home from './components/Home/Home'
import Dataentry from './components/VitalsEntry/Dataentry'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Patients from './components/Patients/Patients'
import Settings from './components/Settings'
import Disease from './components/Disease/Disease'
import PRecords from './components/PRecords/PRecords'

function App() {
  
  const router=createBrowserRouter([
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/',
      element:<Signup/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/doctor',
      element:<Doctor/>
    },
    {
      path:'/nurse',
      element:<Dataentry/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/settings',
      element:<Settings/>
    },
    {
      path:'/patients',
      element:<Patients/>
    },
    {
      path:'/PRecords',
      element:<PRecords/>
    },
    {
      path:'/disease',
      element:<Disease/>
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App