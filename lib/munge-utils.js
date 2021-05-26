export function formatCocktails(data) {
  return data.drinks.map(cocktail => {

    return {
      name: cocktail.strDrink,
      category: cocktail.strCategory,
      alcoholPresent: cocktail.strAlcoholic,
      instructions: cocktail.strInstructions,
      glass: cocktail.strGlass,
      image: cocktail.strDrinkThumb,
      ingredient1: cocktail.strIngredient1,
      ingredient2: cocktail.strIngredient2,
      ingredient3: cocktail.strIngredient3,
      ingredient4: cocktail.strIngredient4,
      ingredient5: cocktail.strIngredient5,
      ingredient6: cocktail.strIngredient6,
      ingredient7: cocktail.strIngredient7,
      ingredient8: cocktail.strIngredient8,
      ingredient9: cocktail.strIngredient9,
      ingredient10: cocktail.strIngredient10,
      ingredient11: cocktail.strIngredient11,
      ingredient12: cocktail.strIngredient12,
      ingredient13: cocktail.strIngredient13,
      ingredient14: cocktail.strIngredient14,
      ingredient15: cocktail.strIngredient15

    };
  });
}

export function formatCocktailDetail(data) {
  return data;
}