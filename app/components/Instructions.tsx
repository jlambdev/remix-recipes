import type { Recipe as RecipeData } from '~/types/recipe';

interface Props {
  instructions: RecipeData['instructions'];
}

export default function Instructions({ instructions }: Props) {
  return (
    <>
      <h3>Instructions</h3>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={`instruction-${index}`}>{instruction}</li>
        ))}
      </ol>
    </>
  );
}
