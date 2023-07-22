import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

import indexStylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: indexStylesUrl }];
};

export const meta: MetaFunction = () => {
  return {
    title: 'Jonny Food',
    description: 'A collection of favourite recipes',
  };
};

export default function Index() {
  return (
    <>
      <h2>Welcome to Jonny Food</h2>
      <div>
        Here you will find a collection of favourite recipes, with no annoying adverts, popups or long backstory about
        how the recipe was handed down through many generations. Just the ingredients, instructions and a photo.
      </div>
      <ul>
        <li>
          <Link to="/leekpotatosoup">Leek &amp; Potato Soup</Link>
        </li>
        <li>
          <Link to="/salmonleeklasagna">Salmon &amp; Leek Lasagna</Link>
        </li>
      </ul>
    </>
  );
}
