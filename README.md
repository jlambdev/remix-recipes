# Remix Recipes

[Remix](https://remix.run/docs) website with a collection of favourite recipes, deployed to Vercel.

## Development

Uses [pnpm](https://pnpm.io/) for package management.

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
pnpm install
```

Add dependencies with:

```sh
pnpm add <dep>
pnpm add -D <devDep>
```

Afterwards, start the Remix development server like so:

```sh
pnpm dev
```

Open up [http://localhost:3001](http://localhost:3001) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

## Ideas

- i18n
- dark/light/system mode
- tighten up dependencies (added `strict-peer-dependencies=false` to .npmrc)
- improve CatchBoundary & content returned / styling

## Latest attempt at having a generic route

```typescript
import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import type { Recipe as RecipeData } from '~/types/recipe';
// import eggs from '~/images/deviled-eggs.png';
import recipes from '~/data/recipes.json';
import Ingredients from '~/components/Ingredients';
import Instructions from '~/components/Instructions';
import Title from '~/components/Title';
import Center from '~/components/Center';
// import Image from '~/components/Image';

export const loader: LoaderFunction = async ({ params }) => {
  const id = params?.id;
  const validIds = Object.keys(recipes);

  if (!id || !validIds.includes(id)) {
    // TODO: 404 page
    return redirect('/');
  }

  const test = await import(`../images/${id}.png`);

  // console.log({ eggs, test });

  const recipe = recipes[id as keyof typeof recipes];

  return json({ recipe, id });
};

export const meta: MetaFunction = () => {
  return {
    title: 'Remix Recipes',
    description: 'A list of favourite recipes',
  };
};

export default function Recipe() {
  const { recipe, id } = useLoaderData<{ id: string; recipe: RecipeData }>();

  return (
    <Center>
      <Title>{recipe.name}</Title>
      {/* <Image src={eggs} /> */}
      <Ingredients serves={recipe.serves} ingredients={recipe.ingredients} />
      <Instructions instructions={recipe.instructions} />
    </Center>
  );
}
```
