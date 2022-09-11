import type { Recipe as RecipeData } from '~/types/recipe';

interface Props {
  serves: string;
  ingredients: RecipeData['ingredients'];
}

export default function Ingredients({ serves, ingredients }: Props) {
  return (
    <>
      <h3>Ingredients</h3>
      <div>{`Serves: ${serves}`}</div>
      <table>
        <tr>
          <th>Amount</th>
          <th>Item</th>
        </tr>
        {ingredients.map((ingredient, index) => (
          <tr key={`ingredient-${index}`}>
            <td>{ingredient.quantity}</td>
            <td>{ingredient.item}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
