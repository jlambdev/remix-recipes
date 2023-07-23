import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import type { Recipe as RecipeData } from '~/types/recipe';
import aubergineCasserole from '~/images/aubergine-casserole.png';
import data from '~/data/aubergine-casserole.json';
import Ingredients from '~/components/Ingredients';
import Instructions from '~/components/Instructions';

export const loader: LoaderFunction = () => {
  return json(data);
};

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
      <img src={aubergineCasserole} alt={data.imageAltText} />
      <Ingredients serves={data.serves} ingredients={data.ingredients} />
      <Instructions instructions={data.instructions} />
    </>
  );
}
