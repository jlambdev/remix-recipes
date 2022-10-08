import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation,
} from '@remix-run/react';
import { useChangeLanguage } from 'remix-i18next';
import { useTranslation } from 'react-i18next';

import i18next from './i18next.server';

import globalStylesUrl from '~/styles/global.css';

type LoaderData = { locale: string };

export const loader: LoaderFunction = async ({ request }) => {
  let locale = await i18next.getLocale(request);
  return json<LoaderData>({ locale });
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: globalStylesUrl }];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error">
      <Layout>
        <div>
          <h1>Sorry, something went wrong:</h1>
          <p>{error.message}</p>
        </div>
      </Layout>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = <p>Oops! Looks like you tried to visit a page that you do not have access to.</p>;
      break;
    case 404:
      message = <p>Oops! Looks like you tried to visit a page that does not exist.</p>;
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
  let { locale } = useLoaderData<LoaderData>();
  let { i18n } = useTranslation();
  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
/* docs
https://github.com/sergiodxa/remix-i18next#readme
https://remix.run/docs/en/v1/guides/data-loading
*/

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  console.log({ location });

  return (
    <div>
      <header>
        <span>🇪🇸</span>
        <span>🇩🇪</span>
        <span>🇬🇧</span>
      </header>
      <main>{children}</main>
    </div>
  );
}
