import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Header, headerLinks } from './components/Header';

export const meta: MetaFunction = () => [
  {
    charset: 'utf-8',
    title: 'My Host Remix App',
    viewport: 'width=device-width,initial-scale=1',
  },
];

export const links: LinksFunction = () => [
  ...headerLinks(),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <div style={{ maxWidth: "90rem", margin: "80px auto" }}>
          <Outlet />
        </div >
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
