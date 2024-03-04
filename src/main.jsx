import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';  
import ProjectPage from './pages/ProjectPage.jsx';
import LoginPage from './pages/LoginPage.jsx';  
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import RegisterPage from './pages/RegisterPage.jsx';


import NavBar from './components/NavBar.jsx';
import { AuthProvider } from './components/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: 'project/:id', element: <ProjectPage /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/contact', element: <ContactUs /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/new-project', element: <NewProjectPage /> },
      { path: '/edit-profile', element: <EditProfilePage /> },
      { path: '/profile', element: <ProfilePage /> },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   
    <RouterProvider router={router} />
    </AuthProvider>  
  </React.StrictMode>
);
