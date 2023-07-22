import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return {
    title: 'Jonny Food',
    description: 'A collection of favourite recipes',
  };
};

export default function Index() {
  return (
    <>
      <h2 className="text-4xl font-bold underline">Recipes</h2>
      <ul>
        <li>
          <Link to="/leek-potato-soup">Leek &amp; Potato Soup</Link>
        </li>
        <li>
          <Link to="/salmon-leek-lasagna">Salmon &amp; Leek Lasagna</Link>
        </li>
      </ul>
    </>
  );
}
