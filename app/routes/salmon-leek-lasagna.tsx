import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import type { Recipe as RecipeData } from '~/types/recipe';
import salmonLeekLasagna from '~/images/salmon-leek-lasagna.png';
import data from '~/data/salmon-leek-lasagna.json';
import Ingredients from '~/components/Ingredients';
import Instructions from '~/components/Instructions';
import Title from '~/components/Title';
import Center from '~/components/Center';
import Image from '~/components/Image';

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
      <Image src={salmonLeekLasagna} alt={data.imageAltText} />
      <Ingredients serves={data.serves} ingredients={data.ingredients} />
      <Instructions instructions={data.instructions} />
    </Center>
  );
}
