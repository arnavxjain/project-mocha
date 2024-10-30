import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Controller from './components/Controller';
import ParanoiaGrid from './components/ParanoiaGrid';
import Projects from './pages/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ParanoiaGrid />,
  },
  {
    path: "/projects",
    element: <Projects />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Controller />
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
