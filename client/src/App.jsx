import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import {
  homeLayout,
  landing,
  login,
  register,
  dashboardLayout,
  error,
  
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <homeLayout/>
  },

  {
    path: '/landing',
    element: <landing/>
  },

  {
    path: '/login',
    element: <login/>
  },

  {
    path: '/register',
    element: <register/>
  },

  {
    path: '/dashboardLayout',
    element: <dashboardLayout/>
  },

  {
    path: '/error',
    element: <error/>
  },
]);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;

