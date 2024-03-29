import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import type { Recipe as RecipeData } from '~/types/recipe';
import data from '~/data/thai-green-curry.json';
import Ingredients from '~/components/Ingredients';
import Instructions from '~/components/Instructions';
import Title from '~/components/Title';
import Center from '~/components/Center';

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
    <Center>
      <Title>{data.title}</Title>
      <Ingredients serves={data.serves} ingredients={data.ingredients} />
      <Instructions instructions={data.instructions} />
    </Center>
  );
}
