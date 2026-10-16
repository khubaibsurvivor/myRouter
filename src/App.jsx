import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Navbar } from './Component/Navbar.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Author from './Pages/Author.jsx'

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
      { path: '/author', element: <Author /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
