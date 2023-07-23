import type { Recipe as RecipeData } from '~/types/recipe';

interface Props {
  serves: string;
  ingredients: RecipeData['ingredients'];
}

export default function Ingredients({ serves, ingredients }: Props) {
  return (
    <>
      <h3 className="text-2xl font-bold p-4 text-gray-800">Ingredients</h3>
      <p className="text-gray-800">{`Serves: ${serves}`}</p>
      <div className="p-4">
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-300 text-gray-800 border border-gray-300 text-left">Amount</th>
              <th className="px-4 py-2 bg-gray-300 text-gray-800 border border-gray-300 text-left">Item</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient, index) => (
              <tr key={`ingredient-${index}`}>
                <td className="px-4 py-2 border text-gray-800 border-gray-300">{ingredient.quantity}</td>
                <td className="px-4 py-2 border text-gray-800 border-gray-300">{ingredient.item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
