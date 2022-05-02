import { LiveReload, Outlet, Links } from "@remix-run/react";
import { MemoryRouter } from "react-router";
import styles from "../app/styles/global.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
        <title>Remix-Contract!</title>
      </head>
      <body>
        <Outlet />

        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
