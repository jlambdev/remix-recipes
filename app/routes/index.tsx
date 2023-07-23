import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return {
    title: 'Remix recipes',
    description: 'A collection of favourite recipes',
  };
};

export default function Index() {
  return (
    <div className="">
      <h2 className="text-3xl font-bold underline">Recipes</h2>
      <ul>
        <li>
          <Link to="/aubergine-casserole">Aubergine Casserole</Link>
        </li>
        <li>
          <Link to="/beer-bratwurst">Bratwurst in Beer</Link>
        </li>
        <li>
          <Link to="/broccoli-garlic-lemon">Broccoli with Garlic and Lemon</Link>
        </li>
        <li>
          <Link to="/crepes">Crepes</Link>
        </li>
        <li>
          <Link to="/leek-potato-soup">Leek &amp; Potato Soup</Link>
        </li>
        <li>
          <Link to="/salmon-leek-lasagna">Salmon &amp; Leek Lasagna</Link>
        </li>
      </ul>
    </div>
  );
}
