import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import PeoplePage from './pages/People.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/People',
    element: <PeoplePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
