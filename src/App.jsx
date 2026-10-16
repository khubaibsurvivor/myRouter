import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Navbar } from './Component/Navbar.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Auther from './Pages/Auther.jsx'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/auther', element: <Auther /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
