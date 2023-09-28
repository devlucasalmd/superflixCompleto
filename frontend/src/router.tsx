import {createBrowserRouter} from 'react-router-dom'
import Layout from './pages/Layout'
import Videos from './pages/Videos'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: 'videos',
        element: <Videos/>
      },
      {
        path: '/',
        element: <HomePage/>
      },
    ],
    errorElement: <ErrorPage/>
  }
])