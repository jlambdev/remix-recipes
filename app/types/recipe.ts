interface Ingredient {
  quantity?: string;
  item: string;
}

export interface Recipe {
  name: string;
  title: string;
  serves: string;
  imageAltText?: string;
  ingredients: Array<Ingredient>;
  instructions: Array<string>;
}
