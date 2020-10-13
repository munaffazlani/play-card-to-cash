import React, { lazy, Suspense } from "react";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { useSelector } from "react-redux";

import ErrorBoundary from "./ErrorBoundary";
import Loader from "@app/components/utility/loader";

const Dashboard = lazy(() => import("@app/containers/dashboard/dashboard"));

const publicRoutes = [
  {
    path: "/",
    exact: true,
    component: lazy(() =>
      import("@app/containers/Pages/landingPage/mobileLanding")
    ),
  },
  {
    path: "/error404",
    component: lazy(() => import("@app/containers/Pages/404/404")),
  },
  {
    path: "/error500",
    component: lazy(() => import("@app/containers/Pages/500/500")),
  },
  {
    path: "/forgotpassword",
    component: lazy(() =>
      import("@app/containers/Pages/ForgotPassword/ForgotPassword")
    ),
  },
  {
    path: "/verifying",
    component: lazy(() => import("@app/components/utility/loader")),
  },
  // {
  //   path: "/authCallback",
  //   component: lazy(() =>
  //     import("@app/containers/Authentication/Auth0/Auth0Callback")
  //   ),
  // },
];
function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = useSelector((state) => state.Auth.userToken);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default function Routes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
