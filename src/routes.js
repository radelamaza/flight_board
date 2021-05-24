/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import DashboardAnalyticsView from './views/DashboardAnalytics';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/flight_board/overview" />
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      
      {
        path: '/flight_board/overview',
        exact: true,
        component: DashboardAnalyticsView
      },
      {
        path: '/flight_board/:id',
        exact: true,
        component: lazy(() => import('views/Episodio'))
      },
      
      {
        component: () => <Redirect to="/flight_board/overview" />
      }
    ]
  }
];

export default routes;
