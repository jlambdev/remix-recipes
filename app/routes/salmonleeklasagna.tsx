import type { LinksFunction, MetaFunction } from '@remix-run/node';

import salmonLeekLasagna from './images/salmonleeklasagna.png';
import recipeStylesUrl from '~/styles/recipe.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: recipeStylesUrl }];
};

export const meta: MetaFunction = () => {
  return {
    title: 'Salmon & Leek Lasagna',
    description: 'Salmon & Leek Lasagna',
  };
};

function Ingredients() {
  return (
    <>
      <h3>Ingredients</h3>
      <div>Serves 3-4 people</div>
      <table>
        <tr>
          <th>Amount</th>
          <th>Item</th>
        </tr>
        <tr>
          <td>750g</td>
          <td>salmon</td>
        </tr>
        <tr>
          <td>2-3</td>
          <td>leeks</td>
        </tr>
        <tr>
          <td>1</td>
          <td>courgette</td>
        </tr>
        <tr>
          <td>900ml</td>
          <td>whole milk</td>
        </tr>
        <tr>
          <td>110g</td>
          <td>butter</td>
        </tr>
        <tr>
          <td>80g</td>
          <td>emmental cheese</td>
        </tr>
        <tr>
          <td>80g</td>
          <td>plain flour</td>
        </tr>
        <tr>
          <td>9-12</td>
          <td>lasagna sheets</td>
        </tr>
        <tr>
          <td></td>
          <td>olive oil</td>
        </tr>
        <tr>
          <td></td>
          <td>salt</td>
        </tr>
        <tr>
          <td></td>
          <td>black pepper</td>
        </tr>
        <tr>
          <td></td>
          <td>nutmeg</td>
        </tr>
        <tr>
          <td></td>
          <td>dill</td>
        </tr>
      </table>
    </>
  );
}

function Instructions() {
  return (
    <>
      <h3>Instructions</h3>
      <ol>
        <li>
          Thorougly wash and chop the leeks and courgette into 1/2cm slices. Ensure salmon is defrosted and cleaned.
          Crumble the salmon into small pieces, ensuring there are no bones. Grate the cheese.
        </li>
        <li>Preheat the oven to 200C.</li>
        <li>
          Begin to lighly fry the leeks &amp; courgette for 10-12 minutes in a covered pan with 2 tablespoons of olive
          oil and 30g of butter. After 8 minutes, add the salmon flakes to partially cook them. Add about a half
          teaspoon of dill.
        </li>
        <li>
          Melt 70g of butter in a large saucepan on low heat. Gradually add flour, toasting it and stirring constantly.
          Add the milk gradually (optionally heat it first with salt). Beat and stir until it is all integrated and the
          flour lumps are dissolved.
        </li>
        <li>
          Cook for 6-8 minutes. Season the bechamel with a salt, pepper and a light (!) shaving of nutmeg to taste.
        </li>
        <li>
          Line a large ovenproof dish with baking paper (or coat with olive oil) and put down 1 layer of lasagna sheets.
          Add a little bechamel source (make sure the corners are covered!), then some leek/salmon mix and a light
          sprinkle of grated cheese.
        </li>
        <li>
          Repeat this process 2-3 more times and make sure the last layer is lasagna sheets, a little bechamel and the
          rest of the cheese. Sprinkle some dill as a garnish before or after cooking.
        </li>
        <li>Cook for 20 minutes. Enjoy :)</li>
      </ol>
    </>
  );
}

export default function Recipe() {
  return (
    <>
      <h2>Salmon and Leek Lasagna</h2>
      <img src={salmonLeekLasagna} alt="Salmon and leek lasagna on a plate" />
      <Ingredients />
      <Instructions />
    </>
  );
}
