import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import PeoplePage from './pages/People/People.page';
import BiosensingPage from './pages/Biosensing.page';
import EBeamPage from './pages/EBeam.page';
import Login from './pages/login.page';
import Biosensor from './pages/Biosensor/Biosensor.page';
import PeopleForm from './pages/People/PeopleForm.page';
import FieldEmissionsPage from './pages/FieldEmissions.page';

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
        path: '/PeopleForm',
        element: <PeopleForm />
    },
    {
        path: '/Biosensing',
        element: <BiosensingPage />
    },
    {
        path: '/EBeam',
        element: <EBeamPage />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/Biosensor',
        element: <Biosensor />
    },
    {
        path: '/FieldEmissions',
        element: <FieldEmissionsPage />
    }
]);

export function Router() {
    return <RouterProvider router={router} />;
}
