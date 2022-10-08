import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import type { Recipe as RecipeData } from '~/types/recipe';
import recipeStylesUrl from '~/styles/recipe.css';
import data from '~/data/crepes.json';
import Ingredients from '~/components/Ingredients';
import Instructions from '~/components/Instructions';

export const loader: LoaderFunction = () => {
  return json(data);
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: recipeStylesUrl }];
};

/* Not sure if this is the right way to combine data & MetaFunction */
export const meta: MetaFunction = () => {
  return {
    title: data.name,
    description: data.name,
  };
};

export default function Recipe() {
  const data = useLoaderData<RecipeData>();

  return (
    <>
      <h2>{data.title}</h2>
      <Ingredients serves={data.serves} ingredients={data.ingredients} />
      <Instructions instructions={data.instructions} />
    </>
  );
}
