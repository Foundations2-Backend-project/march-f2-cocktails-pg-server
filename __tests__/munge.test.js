import rawData from '../data/cocktail-data.js';
import { formatCocktails } from '../lib/munge-utils.js';


describe('API Data munging', () => {

  const expectedCocktails = [{
    drinkName: 'Screwdriver',
    drinkCategory: 'Ordinary Drink',
    alcoholPresent: 'Alcoholic',
    drinkGlass: 'Highball glass',
    drinkInstructions: 'Mix in a highball glass with ice. Garnish and serve.',
    drinkImage: 'https://www.thecocktaildb.com/images/media/drink/8xnyke1504352207.jpg',
    ingredient1: 'Vodka',
    ingredient2: 'Orange juice',
    ingredient3: null,
    ingredient4: null,
    ingredient5: null,
    ingredient6: null,
    ingredient7: null,
    ingredient8: null,
    ingredient9: null,
    ingredient10: null,
    ingredient11: null,
    ingredient12: null,
    ingredient13: null,
    ingredient14: null,
    ingredient15: null
  },
  {
    drinkName: 'Whisky Mac',
    drinkCategory: 'Ordinary Drink',
    alcoholPresent: 'Alcoholic',
    drinkGlass: 'Collins Glass',
    drinkInstructions: 'Pour both of the ingredients into a wine goblet with no ice.',
    drinkImage: 'https://www.thecocktaildb.com/images/media/drink/yvvwys1461867858.jpg',
    ingredient1: 'Scotch',
    ingredient2: 'Wine',
    ingredient3: null,
    ingredient4: null,
    ingredient5: null,
    ingredient6: null,
    ingredient7: null,
    ingredient8: null,
    ingredient9: null,
    ingredient10: null,
    ingredient11: null,
    ingredient12: null,
    ingredient13: null,
    ingredient14: null,
    ingredient15: null
  },
  {
    drinkName: 'Whiskey Sour',
    drinkCategory: 'Ordinary Drink',
    alcoholPresent: 'Alcoholic',
    drinkGlass: 'Old-fashioned glass',
    drinkInstructions: 'Shake with ice. Strain into chilled glass, garnish and serve. If served \'On the rocks\', strain ingredients into old-fashioned glass filled with ice.',
    drinkImage: 'https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg',
    ingredient1: 'Blended whiskey',
    ingredient2: 'Lemon',
    ingredient3: 'Powdered sugar',
    ingredient4: 'Cherry',
    ingredient5: 'Lemon',
    ingredient6: null,
    ingredient7: null,
    ingredient8: null,
    ingredient9: null,
    ingredient10: null,
    ingredient11: null,
    ingredient12: null,
    ingredient13: null,
    ingredient14: null,
    ingredient15: null
  }
  ];

  it('Munges cocktail data', async () => {
    const output = formatCocktails(rawData);
    expect(output).toEqual(expectedCocktails);
  });

  //for test 2
 
    

});