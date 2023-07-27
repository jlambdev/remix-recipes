import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

import Center from '~/components/Center';
import Title from '~/components/Title';

export const meta: MetaFunction = () => {
  return {
    title: 'Remix recipes',
    description: 'A collection of favourite recipes',
  };
};

const links: Array<[string, string]> = [
  ['aubergine-casserole', 'Aubergine Casserole'],
  ['beer-bratwurst', 'Bratwurst in Beer'],
  ['broccoli-garlic-lemon', 'Broccoli with Garlic and Lemon'],
  ['chicken-curry', 'Chicken Curry with Mustard Seeds'],
  ['crepes', 'Crepes'],
  ['deviled-eggs', 'Habanero Deviled Eggs'],
  ['leek-potato-soup', 'Leek & Potato Soup'],
  ['peanut-noodles', 'Peanut Noodles with Fried Egg'],
  ['risotto', 'Mushroom and Red Wine Risotto'],
  ['salmon-leek-lasagna', 'Salmon & Leek Lasagna'],
];

export default function Index() {
  return (
    <Center>
      <Title underline>Recipes</Title>
      {links.map(([url, title], index) => (
        <p className="p-2" key={index}>
          <Link to={`/${url}`}>{title}</Link>
        </p>
      ))}
    </Center>
  );
}
