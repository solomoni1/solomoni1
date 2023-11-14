import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Root, ErrorPage, TestPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
]);

export default router;
