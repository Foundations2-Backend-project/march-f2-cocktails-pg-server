export function formatCocktails(data) {
  return data.drinks.map(cocktail => {
    
    return formatCocktailDetail(cocktail);
  });
}

export function formatCocktailDetail(cocktail) {
  // turn ingredients into an array...
  const ingredients = [];
  if (cocktail.strIngredient1) ingredients.push(cocktail.strIngredient1);
  if (cocktail.strIngredient2) ingredients.push(cocktail.strIngredient2);
  if (cocktail.strIngredient3) ingredients.push(cocktail.strIngredient3);
  if (cocktail.strIngredient4) ingredients.push(cocktail.strIngredient4);
  if (cocktail.strIngredient5) ingredients.push(cocktail.strIngredient5);
  if (cocktail.strIngredient6) ingredients.push(cocktail.strIngredient6);
  if (cocktail.strIngredient7) ingredients.push(cocktail.strIngredient7);
  if (cocktail.strIngredient8) ingredients.push(cocktail.strIngredient8);
  if (cocktail.strIngredient9) ingredients.push(cocktail.strIngredient9);
  if (cocktail.strIngredient10) ingredients.push(cocktail.strIngredient10);
  if (cocktail.strIngredient11) ingredients.push(cocktail.strIngredient11);
  if (cocktail.strIngredient12) ingredients.push(cocktail.strIngredient12);
  if (cocktail.strIngredient13) ingredients.push(cocktail.strIngredient13);
  if (cocktail.strIngredient14) ingredients.push(cocktail.strIngredient14);
  if (cocktail.strIngredient15) ingredients.push(cocktail.strIngredient15);

  return {
    drinkId: cocktail.idDrink,
    name: cocktail.strDrink,
    category: cocktail.strCategory,
    alcoholPresent: cocktail.strAlcoholic,
    instructions: cocktail.strInstructions,
    glass: cocktail.strGlass,
    image: cocktail.strDrinkThumb,
    ingredients: ingredients
  };
}