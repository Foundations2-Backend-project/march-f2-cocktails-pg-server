export function formatCocktails(data) {
  return data.results.map(cocktail => {

    return {
      drinkName: cocktail.drinks.strDrink,
      drinkCategory: cocktail.drinks.strCategory,
      alcoholPresent: cocktail.drinks.strAlcoholic,
      drinkInstructions: cocktail.drinks.strInstructions,
      drinkGlass: cocktail.drinks.strGlass,
      drinkImage: cocktail.drinks.strDrinkThumb,
      ingredient1: cocktail.drinks.strIngredient1,
      ingredient2: cocktail.drinks.strIngredient2,
      ingredient3: cocktail.drinks.strIngredient3,
      ingredient4: cocktail.drinks.strIngredient4,
      ingredient5: cocktail.drinks.strIngredient5,
      ingredient6: cocktail.drinks.strIngredient6,
      ingredient7: cocktail.drinks.strIngredient7,
      ingredient8: cocktail.drinks.strIngredient8,
      ingredient9: cocktail.drinks.strIngredient9,
      ingredient10: cocktail.drinks.strIngredient10,
      ingredient11: cocktail.drinks.strIngredient11,
      ingredient12: cocktail.drinks.strIngredient12,
      ingredient13: cocktail.drinks.strIngredient13,
      ingredient14: cocktail.drinks.strIngredient14,
      ingredient15: cocktail.drinks.strIngredient15

    };
  });
}