import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Home from '../views/pages/Home';
import Layout from '../views/layouts/Layout';
import About from '../views/pages/About';

function Router() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: '/',
      children: [
        { element: <Home />, path: '/' },
        { element: <About />, path: '/about' },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
