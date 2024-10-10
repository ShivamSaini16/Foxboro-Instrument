import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("./Dashboard/Home"));
const Login = lazy(() => import("./Login"));
const Signup = lazy(()=> import("./Signup"))

function App() {
  // Move useRoutes inside the component body
  const route = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> }
  ]);

  return (
    <>
      <Suspense fallback={<div>Loadings...</div>}>
        {route}
      </Suspense>
    </>
  );
}

export default App;
