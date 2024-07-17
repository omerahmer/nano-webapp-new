import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import PeoplePage from './pages/People.page';
import BiosensingPage from './pages/Biosensing.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/People',
    element: <PeoplePage />,
  },
  {
    path: '/Biosensing',
    element: <BiosensingPage />
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
