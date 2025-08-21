import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      <div>Hello "__root"!</div>
      <Outlet />
    </React.Fragment>
  );
}
