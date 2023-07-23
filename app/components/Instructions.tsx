import type { Recipe as RecipeData } from '~/types/recipe';

interface Props {
  instructions: RecipeData['instructions'];
}

export default function Instructions({ instructions }: Props) {
  return (
    <>
      <h3 className="text-2xl font-bold p-4 text-gray-800">Instructions</h3>
      <ol className="list-decimal list-inside">
        {instructions.map((instruction, index) => (
          <li className="mb-4 indent-2 p-2 text-gray-800" key={`instruction-${index}`}>
            {instruction}
          </li>
        ))}
      </ol>
    </>
  );
}
